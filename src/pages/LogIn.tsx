import { Header } from "../components/Header"
import blueLogo from "../assets/blue-logo.svg"
import pawns from "../assets/pawns.svg"
import leftImg from "../assets/left-img.svg"
import { Footer } from "../components/Footer"
import { Input } from "../components/Inputs"
import { Button } from "../components/Button"

export function LogIn() {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="flex justify-center pb-6 pt-20">
          <img src={blueLogo} alt=""
            className="h-[35px] md:h-[64px] w-[142px]"
          />
      </div>
      <p className="text-center text-blue-500">
        Já tem conta? Faça seu login:
      </p>

      <form action=""
        className="flex flex-col place-items-center mb-auto pb-44"
      >
        <Input name="Email" id="email" holder="Insira seu email" type="email" />
        <Input name="Senha" id="senha" holder="Insira sua senha" type="password" />
        <span className="text-red-500 text-xs underline pb-6">
          Esqueci minha senha
        </span>
        <Button name="Entrar" />
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