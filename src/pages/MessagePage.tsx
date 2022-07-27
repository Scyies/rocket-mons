import { getDocs, collection } from "firebase/firestore";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Input } from "../components/Inputs";
import { SuccessPopUp } from "../components/SuccessPopUp";
import { createNewMessage } from "../firebase/CreateNewMessage";
import { db } from "../firebase/Firebase";
import { getUserInfo } from "../firebase/GetUserInfo";
import { useUserAuth } from "../firebase/UserAuthContext";
import { Animals } from "../interfaces/Interfaces";

export function MessagePage() {
  const [values, setValues] = useState({
    name: '',
    telNumber: '',
    adoptionMessage: '',
    selectAnimal: ''
  });
  const [animalsList, setAnimalsList]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [popUp, setPopUp] = useState(false);
  
  const { user } = useUserAuth();

  const navigate = useNavigate();

  function popUpNavigate(): void {
    setPopUp(false);
    navigate('/adopt/message-history')
  }

  async function getAnimalsInfo() {
    const animals: Animals[] = []
    setIsLoading(true);

    try {
      const docs = await getDocs(collection(db, 'animals')).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          animals.push({... doc.data(), id: doc.id})
        });
        
        setAnimalsList([... animals]);
        setIsLoading(false);
      })  
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
      console.log(error.message);      
    }
  }
    
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);
    
    if(!values.name || !values.telNumber || !values.selectAnimal || !values.adoptionMessage) return setError('Favor preencher todos os campos.'), setIsLoading(false);

    try {
      await createNewMessage(
        values.name,
        values.telNumber,
        values.selectAnimal,
        values.adoptionMessage,
        user.email,
        new Date
      ).then(() => {
        setPopUp(true);
      })
    } catch (error: any) {
      setError(error.message)
      console.log(error.message);
    }
    
    setIsLoading(false);
  }  

  useEffect(() => {
    let animalName: string | undefined | null;
    if(sessionStorage.getItem('selectedAnimal')){ animalName = sessionStorage.getItem('selectedAnimal')}

    if(user){getUserInfo(user, setValues, animalName)}
    getAnimalsInfo()
  },[]);

  return (
    <div className="min-h-screen">
      { popUp && <SuccessPopUp loadingBar={false} onClick={popUpNavigate} message="Sua mensagem foi enviada com sucesso!" />}

      <Header />

      <main className="md:bg-right-img bg-no-repeat bg-right flex flex-col justify-center">

        <h2 className="text-blue-500 px-16 pt-14 pb-6 text-center">
          Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
        </h2>

        <form onSubmit={handleSubmit}
          className="flex flex-col place-items-center px-4 bg-gray-300 rounded-md py-8 mb-12 w-[95%] md:w-[80%] max-w-[312px] md:max-w-[550px] self-center mx-0"
        >
          <div className="flex flex-col pb-4 w-[90%]">
            <label htmlFor="Nome"
              className="text-blue-500 pb-1 font-semibold"
            >
              Nome
            </label>
            <Input name="Nome" 
            holder="Insira seu nome completo" 
            type="text" 
            value={values.name}
            change={(e: ChangeEvent<HTMLInputElement>) => setValues({ 
              ...values,
              name: e.target.value
            })} />
          </div>

          <div className="flex flex-col pb-4 w-[90%]">
            <label htmlFor="Telefone"
                className="text-blue-500 pb-1 font-semibold"
            >
                Telefone
            </label>
            <Input name="Telefone" 
            holder="Insira seu telefone e/ou whatsapp" 
            type="tel" 
            value={values.telNumber}
            change={(e: ChangeEvent<HTMLInputElement>) => setValues({ 
              ...values,
              telNumber: e.target.value
            })} />
          </div>

          <div className="flex flex-col pb-4 w-[90%]">
            <label htmlFor="Nome do animal"
                className="text-blue-500 pb-1 font-semibold"
            >
                Nome do animal
            </label>
            <select name="" 
            className="px-4 py-3 rounded-md shadow-md" 
            value={values.selectAnimal}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setValues({ 
              ...values,
              selectAnimal: e.target.value
            })}
            >
              <option value="">Qual desse animais você escolheu?</option>
              {animalsList.map((animal: any, index: any) => (
                  <option key={index} value={animal.name}>{animal.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-[90%]">
            <label htmlFor="message"
              className="text-blue-500 pb-4 font-semibold"
            >
              Mensagem
            </label>
            <textarea name="message" id="message" 
              cols={15} rows={5} 
              value={values.adoptionMessage}
              placeholder="Escreva sua mensagem"
              className="rounded-md mb-8 pl-4 pt-4 shadow-md min-w-[240px] max-w-[336px] md:max-w-[492px] w-full self-center"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValues({ 
                ...values,
                adoptionMessage: e.target.value
              })}
            >
            </textarea>
          </div>

          { error && <ErrorMessage error={error} />}

          <Button name="Enviar" loading={isLoading} />
        </form>
      </main>

      <Footer />
    </div>
  )
}