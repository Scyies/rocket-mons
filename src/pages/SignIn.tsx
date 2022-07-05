import { Header } from "../components/Header"
import leftImg from "../assets/left-img.svg"
import blueLogo from "../assets/blue-logo.svg"
import pawns from "../assets/pawns.svg"
import { Footer } from "../components/Footer"
import { Input } from "../components/Inputs"
import { Button } from "../components/Button"

export function SignIn() {
  return (
    <div className='h-[100vh] flex flex-col'>
      <Header />
      <section>
        <div className="flex justify-center pb-6 pt-20">
          <img src={blueLogo} alt=""
            className="h-[35px] md:h-[64px] w-[142px]"
          />
        </div>
        <div className="flex flex-col px-6 pb-6">
          <p className="text-center text-blue-500">
            Ainda não tem cadastro?
          </p>
          <p className="text-center text-blue-500">
            Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
          </p>
        </div>
      </section>
      <form action="#"
        className="px-6 flex flex-col items-center pb-10 mb-auto"
      >
        <Input 
          name="Email" 
          type="email" 
          holder="Escolha seu melhor email" 
          id="email"
        />
        <Input 
          name="Nome" 
          type="text" 
          holder="Digite seu nome completo" 
          id="nome"
        />
        <Input 
          name="Senha" 
          type="password" 
          holder="Crie uma senha"
          id="senha"
        />
        <Input 
          name="Confirme sua senha" 
          type="password" 
          holder="Repita a senha criada acima"
          id="confirma-senha"
        />
        <Button name="Cadastrar" />
      </form>


      <img src={pawns} 
        alt=""
        className="absolute -top-1 -right-2 h-[243px] md:h-[374px]"
      />
      <img src={leftImg} 
        alt=""
        className="absolute top-2/4 left-0 -z-10"
      />
      <Footer />
    </div>
  )
}