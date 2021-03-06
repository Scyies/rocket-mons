import topImg from '../assets/top-img.svg';
import whiteLogo from '../assets/white-logo.svg';
import defaultProfile from '../assets/prof-icon.svg';
import { House, EnvelopeSimple } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useUserAuth } from '../firebase/UserAuthContext';
import { useEffect, useState } from 'react';
import { query, where, collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/Firebase";
import { SignOut } from 'phosphor-react';

export function Header() {
  const { user, logOut }: any = useUserAuth();
  const [avatar, setAvatar] = useState('');

  let athenticated = false;
  if(user) athenticated = true;  

  let uid = null;
  if(user) uid = user.uid;  

  const navigate = useNavigate();

  function handleLogOut() {
    try {
      logOut();
    } catch (erro: any) {
      console.log(erro.message);
    }
    navigate('/');
  }

  let link = '/';

  if(user) link = '/adopt/adoption-list';

  async function getUserAvatar() {
    const userInfo: any = [];

    const q = query(collection (db, 'userProfile'), where('email', '==', user.email));

    const querySnapshot: any = await getDocs(q);
    querySnapshot.forEach((doc: any) => {
      userInfo.push({... doc.data(), id: doc.id})
    });
    
    if(userInfo.length > 0){
      setAvatar(userInfo[0].avatarURL);
    }
  }

  useEffect(() => {
    if(user) {getUserAvatar()}
  },[]);

  return (
    <header className="flex justify-between mb-[10%] lg:mb-[5%] z-10">
      <img src={topImg} 
        alt=""
        className='top-0 left-0 absolute w-[295px] md:w-[470px] pointer-events-none z-0'
      />
      <div className="relative flex pl-12 pt-12 text-white">
        <img src={whiteLogo} alt=""
          className='h-[31px] pr-12 hidden md:inline-flex pointer-events-none'
        />
        <div className='pr-14 active:scale-[0.95]'>
          <Link to={link} className='hover:text-blue-500 transition-all'>
            <House size={30} />
          </Link>
        </div>
        <div className={classNames('group active:scale-[0.95]', {
          'pointer-events-none': !athenticated,
          'pointer-events-auto': athenticated,
        })}>
          <Link to={'/adopt/message-history'} className={classNames('group', {
          'point-events-none': !athenticated,
          'point-events-auto': athenticated,
        })} > 
            <EnvelopeSimple size={30} className='hover:text-blue-500 transition-all' />
          </Link>
        </div>
      </div>
      <div className={classNames('flex flex-col cursor-pointer z-40', {
        'hidden': !athenticated,
        'inline-flex': athenticated,
      })}>
        <Link to={`/adopt/profile=${uid}`} className='z-10 active:scale-[0.95]' >
          {avatar ? 
          <div className='group relative'>
            <img src={avatar} alt=""
            className='h-10 w-10 object-cover mt-11 mr-12 border-2 border-green-500 rounded-full z-40'
            />
            <p className='absolute text-green-500 -left-8 bottom-2 border-2 border-green-500 px-2 rounded-md font-semibold text-sm z-10 opacity-0 group-hover:-translate-x-6 group-hover:opacity-100 group-hover:ease-in-out group-hover:duration-1000'>
              Perfil
            </p>
          </div>
            :
          <div className='group relative'>
            <img src={defaultProfile} alt=""
            className='h-10 w-10 mt-11 mr-12 rounded-full z-40'
            />
            <p className='absolute text-green-500 -left-8 bottom-2 border-2 border-green-500 px-2 rounded-md font-semibold text-sm z-10 opacity-0 group-hover:-translate-x-6 group-hover:opacity-100 group-hover:ease-in-out group-hover:duration-1000'>
                Perfil
            </p>
          </div>
          }
        </Link>
        <div onClick={handleLogOut}
          className='text-green-500 z-40 mt-1 bg-white rounded-full border-2 border-green-500 h-10 w-10 place-items-center relative group active:scale-[0.95]'
        >
          <div className='pl-[0.35rem] pt-[0.30rem]'>
            <SignOut size={25} />
          </div>
          <p className='absolute right-4 bottom-1 border-2 border-green-500 px-2 rounded-md font-semibold text-sm z-10 opacity-0 group-hover:-translate-x-6 group-hover:opacity-100 group-hover:ease-in-out group-hover:duration-1000'>
            Sair
          </p>
        </div>
      </div>
    </header>
  )
}