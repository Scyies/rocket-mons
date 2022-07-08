import { Header } from "../components/Header"
import leftImg from "../assets/left-img.svg"
import blueLogo from "../assets/blue-logo.svg"
import pawns from "../assets/pawns.svg"
import { Footer } from "../components/Footer"
import { Input } from "../components/Inputs"
import { Button } from "../components/Button"
import { ChangeEvent, FormEvent, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { Link } from "react-router-dom"
import { Eye, EyeSlash } from "phosphor-react"

// const CREATE_NEW_USER_MUTATION = gql`
//   mutation CreateUserAccount($name: String!, $email: String!, $senha: String!) {
//     createUserProfile(name: $name, email: $email, password: $senha)
//   }
// `

const CREATE_NEW_USER_MUTATION = gql`
  mutation CreateUserAccount($name: String!, $email: String!, $password: String!) {
    createUserProfile(data: {name: $name, email: $email, password: $password})
  }
`

export function SignIn() {
  const [values, setValues] = useState({
    email: '',
    nome: '',
    senha: '',
    confirmaSenha: ''
  });
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

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

  const [createUserProfile, { loading }] = useMutation(CREATE_NEW_USER_MUTATION);

  async function submitForm(e: FormEvent) {
    e.preventDefault();

    await createUserProfile({
      variables: {
        name: values.nome,
        email: values.email,
        password: values.senha
      }
    })
  }

  function handleSignIn() {
    alert('cadastro feito com sucesso');
  }

  return (
    <div className='min-h-[100vh] flex flex-col justify-between'>
      <Header />
      <main className="bg-left-img bg-no-repeat bg-left-bottom">
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

        <div className="flex flex-col text-center pb-4">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Email
          </label>
          <Input 
            name="email" 
            type="email" 
            holder="Escolha seu melhor email"
            change={onChange}
            textcenter="text-center"
          />
        </div>

        <div className="flex flex-col text-center pb-4">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Nome
          </label>
          <Input 
            name="nome" 
            type="text" 
            holder="Digite seu nome completo"
            change={onChange}
            textcenter="text-center"
          />
        </div>

        <div className="flex flex-col text-center pb-4 relative">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Senha
          </label>
          <Input 
            name="senha" 
            type={visibilityType} 
            holder="Crie uma senha"
            change={onChange}
            textcenter="text-center"
          />
          <div className="absolute right-3 top-11 text-gray-500 cursor-pointer" onClick={changePasswordVisibility}>
            {visiblePassword ? (<Eye />) : (<EyeSlash />)}
          </div>
        </div>

        <div className="flex flex-col text-center pb-4 relative">
          <label htmlFor=""
          className="text-gray-900 pb-1"
          >
            Confirme sua senha
          </label>
          <Input 
            name="confirmaSenha" 
            type={visibilityType} 
            holder="Repita a senha criada acima"
            change={onChange}
            padrao={values.confirmaSenha}
            textcenter="text-center"
          />
          <div className="absolute right-3 top-11 text-gray-500 cursor-pointer" onClick={changePasswordVisibility}>
            {visiblePassword ? (<Eye />) : (<EyeSlash />)}
          </div>
        </div>
        <Link to="/adopt/adoption-list" >
        <Button name="Cadastrar" click={handleSignIn} />
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