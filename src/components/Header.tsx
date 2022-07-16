import topImg from '../assets/top-img.svg';
import whiteLogo from '../assets/white-logo.svg';
import defaultProfile from '../assets/prof-icon.svg';
import { House, EnvelopeSimple } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { client } from '../lib/apollo';

export function Header() {
  const userId = sessionStorage.getItem('userId');

  let athenticated = false;
  if(sessionStorage.getItem('authToken')) athenticated = true;

  const navigate = useNavigate();

  function handleLogOut() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    client.resetStore();
    navigate('/');
  }

  let link = '/';

  if(sessionStorage.getItem('authToken')){
    link = '/adopt/adoption-list'
  }

  return (
    <header className="flex justify-between mb-[10%] lg:mb-[5%] z-10">
      <img src={topImg} 
        alt=""
        className='top-0 left-0 absolute w-[295px] md:w-[470px] pointer-events-none'
      />
      <div className="relative flex pl-12 pt-12 text-white">
        <img src={whiteLogo} alt=""
          className='h-[31px] pr-12 hidden md:inline-flex pointer-events-none'
        />
        <div className='pr-14'>
          <Link to={link}>
            <House size={30} />
          </Link>
        </div>
        <div className={classNames('group', {
          'pointer-events-none': !athenticated,
          'pointer-events-auto': athenticated,
        })}>
          <Link to={'/adopt/adoption-message'} className={classNames('group', {
          'point-events-none': !athenticated,
          'point-events-auto': athenticated,
        })} > 
            <EnvelopeSimple size={30} />
          </Link>
        </div>
      </div>
      <div className='flex cursor-pointer'>
        <div onClick={handleLogOut}
          className={classNames('text-green-500', {
            'hidden': !athenticated,
            'inline-flex': athenticated
          })}
        >
          <p className='border-2 border-green-500 p-1 rounded-md font-semibold text-sm mt-12 mb-1'>
            LogOut
          </p>
        </div>
        <Link to={`/adopt/profile${userId}`} className='z-10' >
          <img src={defaultProfile} alt=""
            className={classNames('h-10 w-10 mt-11 mr-12', {
              'hidden': !athenticated,
              'inline-flex': athenticated,
            })}
          />
        </Link>
      </div>
    </header>
  )
}