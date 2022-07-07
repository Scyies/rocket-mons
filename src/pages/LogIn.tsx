import { Header } from "../components/Header"
import blueLogo from "../assets/blue-logo.svg"
import pawns from "../assets/pawns.svg"
import leftImg from "../assets/left-img.svg"
import { Footer } from "../components/Footer"
import { Input } from "../components/Inputs"
import { Button } from "../components/Button"
import { ChangeEvent, FormEvent, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { Link } from "react-router-dom"

const QUERY_TEST = gql`
  mutation GetProfiles($email: String!, $password: String!) {
    usersProfiles(email: $email, password: $password) {
      id
    }
  }
`

interface QueryTypes {
  email: string,
  password: string
}

export function LogIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');  

  const [loginProfile, { loading }] = useMutation(QUERY_TEST);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await loginProfile({
      variables: {
        email: email,
        password: senha
      },
      onCompleted: () => {
        alert('deu boa caraio')
      }
    })
    alert('default')
  };

  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />

      <div className="flex justify-center pb-6">
          <img src={blueLogo} alt=""
            className="h-[35px] md:h-[64px] w-[142px]"
          />
      </div>
      <p className="text-center text-blue-500">
        Já tem conta? Faça seu login:
      </p>

      <form onSubmit={handleSubmit}
        className="flex flex-col place-items-center mb-auto pb-44 mt-10"
      >
        <div className="flex flex-col text-center pb-4">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Email
          </label>
          <Input name="Email" holder="Insira seu email" type="email" change={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
        </div>

        <div className="flex flex-col text-center pb-4">
          <label htmlFor=""
            className="text-gray-900 pb-1"
          >
            Senha
          </label>
          <Input name="Senha" holder="Insira sua senha" type="password" change={(event: ChangeEvent<HTMLInputElement>) => setSenha(event.target.value)} />
          <span className="text-red-500 text-xs underline mt-2">
            Esqueci minha senha
          </span>
        </div>
        <Link to="/adopt/adoption-list" >
          <Button name="Entrar" />
        </Link>
      </form>

      <div className="absolute top-0 right-0 overflow-hidden h-[220px] w-[170px]">  
        <img src={pawns} 
          alt=""
          className="translate-x-5"
        />
      </div>
      <img src={leftImg} 
        alt=""
        className="absolute top-2/4 left-0 -z-10 h-[415px]"
      />
        <Footer />
    </div>
  )
}