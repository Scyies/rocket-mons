import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Input } from "../components/Inputs";

const ANIMALS_QUERY = gql`
query AnimalsQuery ($id: ID!) {
  animals {
    id
    name
  }
  userProfile(where: {id: $id}) {
    name
    telNumber
  }
}
`

const CREATE_NEW_MESSAGE_MUTATION = gql`
  mutation NewMessage($name: String!, $telNumber: String!, $adoptionMessage: String!, $animalNames: AnimalsEnum!, $animalId: ID!, $userId: ID!) {
    createAdoptionMessage(
      data: {name: $name, telNumber: $telNumber, adoptionMessage: $adoptionMessage, animalNames: $animalNames, animal: {connect: {id: $animalId}}, userProfile: {connect: {id: $userId}}}
    ) {
      id
    }
  }
`

export function MessagePage() {
  const [values, setValues] = useState({
    name: '',
    telNumber: '',
    adoptionMessage: '',
    selectAnimal: ''
  })
  
  const [createNewMessage] = useMutation(CREATE_NEW_MESSAGE_MUTATION);

  const userId = sessionStorage.getItem('userId');

  const { loading, data } = useQuery(ANIMALS_QUERY, {
    variables: {
      id: userId
    }
  });
  if(loading) return (<>Loading...</>);

  const animalNamesInput: HTMLSelectElement = document.querySelector('#test')!;
    
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    let selectedIndex = animalNamesInput?.options.selectedIndex - 1;

    try {
      await createNewMessage({
        variables: {
          name: values.name,
          telNumber: values.telNumber,
          adoptionMessage: values.adoptionMessage,
          animalNames: values.selectAnimal,
          animalId: data.animals[selectedIndex].id,
          userId: userId
        },
        onCompleted: () => {
          alert('Sua mensagem foi enviada com sucesso');
        }
      })
    } catch (error: any) {
      alert('Error: ' + error.message);
    }
    console.log(values);
  }

  return (
    <div className="min-h-screen">
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
            required={true} 
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
            required={true} 
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
            <select name="" id="test" 
            className="px-4 py-3 rounded-md shadow-md" 
            required
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setValues({ 
              ...values,
              selectAnimal: e.target.value
            })}
            >
              <option value="">Qual desse animais você escolheu?</option>
              {data.animals.map((animal: any, index: any) => (
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
              placeholder="Escreva sua mensagem"
              required
              className="rounded-md mb-8 pl-4 pt-4 shadow-md min-w-[240px] max-w-[336px] md:max-w-[492px] w-full self-center"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValues({ 
                ...values,
                adoptionMessage: e.target.value
              })}
            >
            </textarea>
          </div>

          <Button name="Enviar" />
        </form>
      </main>

      <Footer />
    </div>
  )
}