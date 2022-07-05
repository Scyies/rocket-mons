import topImg from '../assets/top-img.svg';
import whiteLogo from '../assets/white-logo.svg';
import defaultProfile from '../assets/prof-icon.svg';
import { House, EnvelopeSimple } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-transparent flex justify-between">
      <img src={topImg} 
        alt=""
        className='top-0 left-0 absolute w-[295px] md:w-[470px]'
      />
      <div className="relative flex pl-12 pt-12 text-white">
        <img src={whiteLogo} alt=""
          className='h-[31px] pr-12 hidden md:inline-flex'
        />
        <div className='pr-14'>
          <Link to={'/'}>
            <House size={30} />
          </Link>
        </div>
        <div>
          <Link to={'/'}> 
            <EnvelopeSimple size={30} />
          </Link>
        </div>
      </div>
      <img src={defaultProfile} alt=""
        className='h-10 w-10 mt-11 mr-12 hidden'
      />
    </header>
  )
}