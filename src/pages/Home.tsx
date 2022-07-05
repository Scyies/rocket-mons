import whiteLogo from '../assets/white-logo.svg';
import rightImg from '../assets/right-img.svg';
import catsDogs from '../assets/cats-dogs.svg';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export function Home() {

  // function handleSignIn() {
  //   const navigate = useNavigate;
  //   navigate('/signin')
  // }

  return(
    <div className='bg-blue-500 h-[100vh] w-full flex flex-col justify-between'>
      <Header />
      <div className='flex justify-center pt-0'>
          <img src={whiteLogo} alt=""
            className='mt-20 pb-6 w-[187px] md:w-[251px]'
          />
      </div>
      <div className='flex flex-col justify-center items-center pb-20'>
        <h1 className='text-white text-center text-2xl pb-6 z-10'>
          Boas-vindas!
        </h1>
        <p className='text-white text-center text-base pb-6 justify-center px-16 z-10'>
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
        </p>
        <img src={rightImg} 
          alt="" 
          className='absolute top-1/4 right-0 h-[405px] md:h-[664px] z-0'
        />
        <Button name='Já tenho conta' />
        <Button name='Quero me cadastrar' />
      </div>
      <div className='flex justify-center relative h-full w-full'>
        <img src={catsDogs} 
          alt=""
          className='h-[248px] md:h-[340px] w-[312px] md:w-[442px] absolute -bottom-10'
        />
      </div>
      <Footer />
    </div>
  )
}