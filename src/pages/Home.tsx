import whiteLogo from '../assets/white-logo.svg';
import rightImg from '../assets/right-img.svg';
import catsDogs from '../assets/cats-dogs.svg';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Home() {
  return(
    <div className='bg-blue-500 h-full w-full'>
      <Header />
      <div className='flex justify-center pt-0'>
          <img src={whiteLogo} alt=""
            className='pt-20 pb-6'
          />
      </div>
      <div className='flex flex-col justify-center items-center pb-6'>
        <h1 className='text-white text-center text-2xl pb-6'>
          Boas-vindas!
        </h1>
        <p className='text-white text-center text-base pb-6 justify-center px-16'>
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
        </p>
        <img src={rightImg} 
          alt="" 
          className='absolute right-0 max-h-[405px] md:max-h-[664px]'
        />
        <Button name='Já tenho conta' />
        <Button name='Quero me cadastrar' />
      </div>
      <div className='flex justify-center'>
        <img src={catsDogs} 
          alt=""
          className='w-[312px] md:w-[442px] pb-20'
        />
      </div>
      <Footer />
    </div>
  )
}