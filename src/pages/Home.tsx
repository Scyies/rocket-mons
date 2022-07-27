import whiteLogo from '../assets/white-logo.svg';
import catsDogs from '../assets/cats-dogs.svg';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('authToken')) navigate('/adopt/adoption-list')
  },[]);

  return(
    <div className='bg-blue-500 min-h-screen w-full flex flex-col'>
      <Header />
      <main className='bg-right-img bg-no-repeat bg-right bg-mobile md:bg-tablet h-full flex-grow'>
        <div className='flex justify-center'>
            <img src={whiteLogo} alt=""
              className='pb-6 w-[187px] md:w-[251px]'
            />
        </div>
        <div className='flex flex-col justify-center items-center pb-20 z-10'>
          <h1 className='text-white text-center text-2xl pb-6 z-10'>
            Boas-vindas!
          </h1>
          <p className='text-white text-center text-base pb-6 justify-center px-16 z-10'>
            Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
          </p>
          <Link to={'/log-in'} className='z-10 m-2'>
            <Button name='Já tenho conta' />
          </Link>

          <Link to={'/sign-in'} className='z-10 m-2'>
            <Button name='Quero me cadastrar' />
          </Link>
        </div>
        <div className='flex justify-center z-0 -mb-[5%]'>
          <img src={catsDogs} 
            alt=""
            className='h-[248px] md:h-[340px] w-[312px] md:w-[442px] z-0'
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}