import { Header } from "../components/Header"
import leftImg from "../assets/left-img.svg"
import blueLogo from "../assets/blue-logo.svg"
import pawns from "../assets/pawns.svg"
import { Footer } from "../components/Footer"
import { Input } from "../components/Inputs"
import { Button } from "../components/Button"

export function SignIn() {

  function handleSignIn() {
    alert('cadastro feito com sucesso');
  }

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
          <p className="text-center text-blue-500 mb-2">
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

        <div className="flex flex-col text-center pb-4">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Email
          </label>
          <Input 
            name="Email" 
            type="email" 
            holder="Escolha seu melhor email" 
          />
        </div>

        <div className="flex flex-col text-center pb-4">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Nome
          </label>
          <Input 
            name="Nome" 
            type="text" 
            holder="Digite seu nome completo" 
          />
        </div>

        <div className="flex flex-col text-center pb-4">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Senha
          </label>
          <Input 
            name="Senha" 
            type="password" 
            holder="Crie uma senha"
          />
        </div>

        <div className="flex flex-col text-center pb-4">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Confirme sua senha
          </label>
          <Input 
            name="Confirme sua senha" 
            type="password" 
            holder="Repita a senha criada acima"
          />
        </div>
        <Button name="Cadastrar" click={handleSignIn} />
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