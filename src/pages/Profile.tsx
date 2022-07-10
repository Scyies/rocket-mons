import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import defaultProfile from '../assets/prof-icon.svg';
import { Input } from "../components/Inputs";
import { Button } from "../components/Button";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const INFO_QUERY = gql`
  query GetInfoUser($id: ID!) {
    userProfile(where: {id: $id}) {
      avatarUrl
      bioMessage
      city
      name
      telNumber
    }
  }
`

const UPDATE_INFO_MUTATION = gql`
  mutation MyMutation($id: ID!, $name: String!, $bioMessage: String, $city: String, $telNumber: String) {
    updateUserProfile(
      where: {id: $id}
      data: {name: $name, bioMessage: $bioMessage, city: $city, telNumber: $telNumber}
    ) {
      name
      city
      bioMessage
      telNumber
    }
    publishUserProfile(where: {id: $id}) {
      name
      city
      bioMessage
      telNumber
    }
  }
`

export function Profile() {
  const [values, setValues] = useState({
    name: '',
    telNumber: '',
    city: '',
    bioMessage: ''
  });

  const userId = sessionStorage.getItem('userId');

  const { loading, error, data } = useQuery(INFO_QUERY, {
    variables: {
      id: userId
    }
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;
  
  const userInfo = data.userProfile;

  console.log(values);
  
  const [saveUserInfo] = useMutation(UPDATE_INFO_MUTATION);

  function handleSave() {
    saveUserInfo({
      variables: {
        id: userId,
        name: values.name,
        city: values.city,
        bioMessage: values.bioMessage,
        telNumber: values.telNumber
      },
      onCompleted: () => {
        alert('Os dados foram salvados com sucesso');
      }
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="md:bg-right-img md:bg-right md:bg-contain bg-no-repeat flex flex-col">

        <h2 className="text-blue-500 px-16 pt-14 pb-6 text-center">
          Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
        </h2>

        <section className="bg-gray-300 flex flex-col mx-6 mb-4 rounded-md px-4 py-8 place-items-center w-[95%] md:w-[80%] max-w-[312px] md:max-w-[550px] self-center">
          <h2 className="text-gray-900 font-semibold text-center mb-4">
            Perfil
          </h2>

          <div className="flex flex-col pb-1 w-full">
            <label
              className="text-blue-500 pb-1 font-semibold"
            >
              Foto
            </label>
            <div className="flex flex-col place-items-center">
              {userInfo.avatarUrl ? (
                <img src={userInfo.avatarUrl} alt=""
                className="w-20 mb-1 rounded-full"
              />
              ) : (
                <img src={defaultProfile} alt=""
                className="w-20 mb-1 rounded-full"
              />
              )}
              
              <span className="text-red-500 text-xs pb-6 hover:underline">
                Clique na foto para editar
              </span>
            </div>
          </div>

          <div className="flex flex-col pb-4 w-full">
            <label
              className="text-blue-500 pb-1 font-semibold"
            >
              Nome
            </label>
            <Input name="Nome" type="text"
            required={true} 
            change={(e: ChangeEvent<HTMLInputElement>) => setValues({ 
              ...values,
              name: e.target.value
            })} />
          </div>

          <div className="flex flex-col pb-4 w-full">
            <label
              className="text-blue-500 pb-1 font-semibold"
            >
              Telefone
            </label>
            <Input name="tel" type="tel" value={values.telNumber} 
            change={(e: ChangeEvent<HTMLInputElement>) => setValues({ 
              ...values,
              telNumber: e.target.value
            })} />
          </div>

          <div className="flex flex-col pb-4 w-full">
            <label
              className="text-blue-500 pb-1 font-semibold"
            >
              Cidade
            </label>
            <Input name="cidade" type="text" value={values.city} 
            change={(e: ChangeEvent<HTMLInputElement>) => setValues({ 
              ...values,
              city: e.target.value
            })} />
          </div>

          <div className="flex flex-col w-full">
            <label
              className="text-blue-500 pb-4 font-semibold"
            >
              Sobre
            </label>
            <textarea name="message" id="message" 
              cols={15} rows={5} 
              className="rounded-md mb-8 pl-4 pt-4 shadow-md min-w-[240px] max-w-[336px] md:max-w-[492px] self-center w-full"
              value={values.bioMessage}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValues({ 
                ...values,
                bioMessage: e.target.value
              })}
            >
            </textarea>
          </div>

          <Button name="Salvar" click={handleSave} />
        </section>
      </main>

      <Footer />
    </div>
  )
}