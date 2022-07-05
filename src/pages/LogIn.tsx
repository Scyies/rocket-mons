import { Header } from "../components/Header"
import leftImg from "../assets/left-img.svg"
import blueLogo from "../assets/blue-logo.svg"
import pawns from "../assets/pawns.svg"
import { Footer } from "../components/Footer"

export function LogIn() {
  return (
    <div className='bg-gray-100 h-full'>
      <Header />
      <div className="flex justify-center pt-20 pb-6">
        <img src={blueLogo} alt=""
          className="h-[35px] md:h-[64px]"
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
      <form action="#">
        <label htmlFor="email">Email</label>
      </form>


      <img src={pawns} 
        alt=""
        className="absolute top-0 right-0 h-[243px] md:h-[374px]"
      />
      <img src={leftImg} 
        alt=""
        className="absolute top-1/3 left-0 -z-10"
      />
      <Footer />
    </div>
  )
}