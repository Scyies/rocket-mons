import { Header } from "../components/Header"
import blueLogo from "../assets/blue-logo.svg"
import pawns from "../assets/pawns.svg"
import { Footer } from "../components/Footer"
import { Input } from "../components/Inputs"
import { Button } from "../components/Button"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeSlash } from "phosphor-react"
import { app } from "../firebase/Firebase"
import { useUserAuth } from "../firebase/UserAuthContext"
import { ErrorMessage } from "../components/ErrorMessage"

export function LogIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibilityType, setVisibilityType] = useState('password');

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const { logIn } = useUserAuth();

  app
  
  const navigate = useNavigate();

  function changePasswordVisibility() {
    setVisiblePassword(true)
    setVisibilityType('text')
    if(visiblePassword === true) {
    setVisiblePassword(false)
    setVisibilityType('password')
    }  
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if(!email || !senha) return setError('Informe e-mail e senha.')

    setIsLoading(true);

    try {
      await logIn(email, senha).then(() => {
        navigate('/adopt/adoption-list');
      })
      setIsLoading(false);
    } catch (erro: any) {
      if(erro.code === 'auth/invalid-email') {setError('E-mail inválido.')}
      if(erro.code === 'auth/user-not-found') {setError('E-mail não cadastrado.')}
      if(erro.code === 'auth/wrong-password') {setError('E-mail ou senha inválido.')}
      setIsLoading(false)
      console.log(erro.message);
    }
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
          <div className="flex flex-col text-center pb-4 w-full max-w-[336px] md:max-w-[344px]">
            <label htmlFor=""
            className="text-gray-900 pb-1"
            >
              Email
            </label>
            <Input name="email" 
            textcenter="text-center" 
            holder="Insira seu email" 
            type="email" 
            change={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
          </div>

          <div className="flex flex-col text-center pb-4 relative w-full max-w-[336px] md:max-w-[344px] mb-2">
            <label htmlFor=""
              className="text-gray-900 pb-1"
            >
              Senha
            </label>
            <Input name="senha" 
            textcenter="text-center" 
            holder="Insira sua senha" 
            type={visibilityType} 
            change={(event: ChangeEvent<HTMLInputElement>) => setSenha(event.target.value)} />

            <div className="absolute right-3 top-11 text-gray-500 cursor-pointer z-50" onClick={changePasswordVisibility}>
              {visiblePassword ? (<Eye />) : (<EyeSlash />)}
            </div>

            <span className="text-red-500 text-xs underline mt-2">
              Esqueci minha senha
            </span>
          </div>
          {error && <ErrorMessage error={error} />}

          <Button name="Entrar" loading={isLoading} />
        </form>

        <div className="absolute top-0 right-0 overflow-hidden h-[220px] w-[170px] z-40">  
          <img src={pawns} 
            alt=""
            className="translate-x-5 z-40"
          />
        </div>
        
      </main>
        <Footer />
    </div>
  )
}