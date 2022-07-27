import { Header } from "../components/Header"
import blueLogo from "../assets/blue-logo.svg"
import pawns from "../assets/pawns.svg"
import { Footer } from "../components/Footer"
import { Input } from "../components/Inputs"
import { Button } from "../components/Button"
import { ChangeEvent, FormEvent, useState } from "react"
import { Eye, EyeSlash } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import { useUserAuth } from "../firebase/UserAuthContext"
import { userProfileCreation } from "../firebase/UserProfileCreation"
import { ErrorMessage } from "../components/ErrorMessage"
import { SuccessPopUp } from "../components/SuccessPopUp"

export function SignIn() {
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: ''
  });

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibilityType, setVisibilityType] = useState('password');

  const [isLoading, setIsLoading] = useState(false);

  const [popUp, setPopUp] = useState(false);  

  const [error, setError] = useState('');

  const { signUp } =  useUserAuth();

  function changePasswordVisibility() {
    setVisiblePassword(true)
    setVisibilityType('text')
    if(visiblePassword === true) {
    setVisiblePassword(false)
    setVisibilityType('password')
    } 
  }

  const navigate = useNavigate();

  let navigateTimeout;

  function timedNavigate(): void {
    navigateTimeout = setTimeout(popUpNavigate, 5000)
  }

  function popUpNavigate(): void {
    navigate('/adopt/adoption-list');
    setPopUp(false);
  }

  async function submitForm(e: FormEvent) {
    e.preventDefault();
    setError('');
    if(!formState.email || !formState.password || !formState.name || !formState.passwordConfirm) return setError('Favor preencher todos os campos.')
    if(formState.password != formState.passwordConfirm) return setError('Favor confirmar sua senha.')
    
    setIsLoading(true);
    try {
      await signUp(formState.email, formState.password).then(() => {
        userProfileCreation(formState.name, formState.email),
        setPopUp(true),
        timedNavigate()
      });
      setIsLoading(false); 
    } catch (erro: any) {
      if(erro.code === 'auth/invalid-email') {setError('Favor informar um e-mail válido.')}
      if(erro.code === 'auth/network-request-failed') {setError('Houve um erro na conexão, favor tentar novamente.')}
      setIsLoading(false);
      console.log(erro.message)
    }
  }

  return (
    <div className='min-h-[100vh] flex flex-col justify-between'>
      <Header />

      { popUp && <SuccessPopUp loadingBar={true} onClick={popUpNavigate} message="Seu cadastro foi realizado com sucesso" />}

      <main className="bg-left-img bg-no-repeat bg-left-bottom md:bg-right-img md:bg-right md:bg-contain">
        <section>
          <div className="flex justify-center pb-6">
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
      <form onSubmit={submitForm}
        className="px-6 flex flex-col items-center pb-10 mb-auto"
      >

        <div className="flex flex-col text-center pb-4 w-full max-w-[336px] md:max-w-[344px]">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Email
          </label>
          <Input 
            name="email" 
            type="email" 
            holder="Escolha seu melhor email"
            change={(e: ChangeEvent<HTMLInputElement>) => setFormState({ 
              ...formState,
              email: e.target.value
            })}
            textcenter="text-center"
          />
        </div>

        <div className="flex flex-col text-center pb-4 w-full max-w-[336px] md:max-w-[344px]">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Nome
          </label>
          <Input 
            name="nome" 
            type="text" 
            holder="Digite seu nome completo"
            change={(e: ChangeEvent<HTMLInputElement>) => setFormState({ 
              ...formState,
              name: e.target.value
            })}
            textcenter="text-center"
          />
        </div>

        <div className="flex flex-col text-center pb-4 relative w-full max-w-[336px] md:max-w-[344px]">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Senha
          </label>
          <Input 
            name="password" 
            type={visibilityType} 
            holder="Crie uma senha"
            change={(e: ChangeEvent<HTMLInputElement>) => setFormState({ 
              ...formState,
              password: e.target.value
            })}
            textcenter="text-center"
          />
          <div className="absolute right-3 top-11 text-gray-500 cursor-pointer z-50" onClick={changePasswordVisibility}>
            {visiblePassword ? (<Eye />) : (<EyeSlash />)}
          </div>
        </div>

        <div className="flex flex-col text-center pb-4 relative w-full max-w-[336px] md:max-w-[344px] mb-2">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Confirme sua senha
          </label>
          <Input 
            name="confirmaSenha" 
            type={visibilityType} 
            holder="Repita a senha criada acima"
            change={(e: ChangeEvent<HTMLInputElement>) => setFormState({ 
              ...formState,
              passwordConfirm: e.target.value
            })}
            textcenter="text-center"
          />
          <div className="absolute right-3 top-11 text-gray-500 cursor-pointer z-50" onClick={changePasswordVisibility}>
            {visiblePassword ? (<Eye />) : (<EyeSlash />)}
          </div>
        </div>

        { error && <ErrorMessage error={error} />}

        <Button name="Cadastrar" loading={isLoading} />
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