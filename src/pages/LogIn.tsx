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
import { Eye, EyeSlash } from "phosphor-react"

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

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibilityType, setVisibilityType] = useState('password');

  function changePasswordVisibility() {
    setVisiblePassword(true)
    setVisibilityType('text')
    if(visiblePassword === true) {
    setVisiblePassword(false)
    setVisibilityType('password')
    }  
  }

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

      <main className="bg-left-img bg-no-repeat bg-left-bottom md:bg-right-img md:bg-right md:bg-contain">
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
            <Input name="email" textcenter="text-center" holder="Insira seu email" type="email" change={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
          </div>

          <div className="flex flex-col text-center pb-4 relative">
            <label htmlFor=""
              className="text-gray-900 pb-1"
            >
              Senha
            </label>
            <Input name="senha" textcenter="text-center" holder="Insira sua senha" type={visibilityType} change={(event: ChangeEvent<HTMLInputElement>) => setSenha(event.target.value)} />

            <div className="absolute right-3 top-11 text-gray-500 cursor-pointer" onClick={changePasswordVisibility}>
              {visiblePassword ? (<Eye />) : (<EyeSlash />)}
            </div>

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
        
      </main>
        <Footer />
    </div>
  )
}