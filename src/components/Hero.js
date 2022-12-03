import React, {useState, useEffect}  from 'react';
// import logo
import LogoDark from '../assets/img/logo-dark.svg';
import LogoWhite from '../assets/img/logo-white.svg';
// import icons
import {BsFillSunFill, BsMoonFill, BsCheck} from 'react-icons/bs';
// import girl image
import GirlImg from '../assets/img/girl.png';

const Hero = () => {
  // theme state
  const [theme, setTheme] = useState('light');
  return (
  <section className='min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark'> 
    <button className='p-4 bg-accent text-white rounded-full w-12 flex justify-center imtes-center'>
      {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
    </button>
  </section>
  );
};

export default Hero;
