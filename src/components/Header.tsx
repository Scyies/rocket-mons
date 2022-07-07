import topImg from '../assets/top-img.svg';
import whiteLogo from '../assets/white-logo.svg';
import defaultProfile from '../assets/prof-icon.svg';
import { House, EnvelopeSimple } from 'phosphor-react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export function Header() {
  let tempSolution = false;
  if(window.location.pathname.includes('/adopt/')) tempSolution = true;

  return (
    <header className="bg-transparent flex justify-between mb-10">
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
        <div className={classNames('group', {
          'pointer-events-none': !tempSolution,
          'pointer-events-auto': tempSolution,
        })}>
          <Link to={'/adopt/adoption-message'} className={classNames('group', {
          'point-events-none': !tempSolution,
          'point-events-auto': tempSolution,
        })} > 
            <EnvelopeSimple size={30} />
          </Link>
        </div>
      </div>
      <Link to="/adopt/profile" className='z-10' >
        <img src={defaultProfile} alt=""
          className={classNames('h-10 w-10 mt-11 mr-12', {
            'hidden': !tempSolution,
            'inline-flex': tempSolution,
          })}
        />
      </Link>
    </header>
  )
}