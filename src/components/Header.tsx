import topImg from '../assets/top-img.svg';
import { House, EnvelopeSimple } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Home } from '../pages/Home';

export function Header() {
  return (
    <header className="bg-transparent">
      <img src={topImg} 
        alt=""
        className='top-0 left-0 absolute w-[295px] md:w-[470px]'
      />
      <div className="relative flex pl-12 pt-12 text-white">
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
    </header>
  )
}