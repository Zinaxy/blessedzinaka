import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { BiSolidCloudDownload } from 'react-icons/bi';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const sideMenuRef = useRef();

  useEffect(() => {
    // Load the theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/*  <div className='fixed top-0 right-0 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>
  <div className='fixed top-0 right-0 -z-10 translate-y-[-80%] hidden dark:block'>
        <Image src={assets.bgdark} alt='' className='w-full' />
      </div> */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
          ${
            isScroll
              ? 'bg-white dark:bg-dark dark:shadow-white/20 bg-opacity-50 backdrop-blur-lg shadow-sm'
              : ''
          }`}
        id='navbar'
      >
        <a href='#top'>
          <Image
            src={darkMode ? assets.logo_light : assets.logo_dark}
            className='w-[10rem] cursor-pointer mr-14'
            alt='logo'
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
            ${
              isScroll
                ? ''
                : 'bg-white dark:bg-gray-800 shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
            }`}
        >
          <li>
            <a href='#top' className='font-Ovo dark:text-white'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='font-Ovo dark:text-white'>
              About Me
            </a>
          </li>
          <li>
            <a href='#services' className='font-Ovo dark:text-white'>
              Services
            </a>
          </li>
          <li>
            <a href='#work' className='font-Ovo dark:text-white'>
              My Work
            </a>
          </li>
          <li>
            <a href='#contact' className='font-Ovo dark:text-white'>
              Contact Me
            </a>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode}>
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt='Toggle Theme'
              className='w-6'
            />
          </button>

          <a href='' className='btn-light '>
            Contact
            <Image
              src={darkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className='w-3'
              alt='contact icon'
            />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image
              src={darkMode ? assets.menu_white : assets.menu_black}
              alt='Menu'
              className='w-6'
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-gray-900 text-dark dark:text-white transition duration-500 shadow-lg'
        >
          <div className='flex justify-between items-center  px-10'>
            <a href='#top' className='absolute left-6 top-6'>
              {/* <Image
                src={darkMode ? assets.logo_light : assets.logo_dark}
                className='w-[10rem] cursor-pointer mr-14'
                alt='logo'
              /> */}{' '}
              <span className='font-bold text-2xl border-2 border-primary p-2 rounded-full transition-shadow duration-75'>
                BZ
              </span>
            </a>
            <button className='absolute right-6 top-6' onClick={closeMenu}>
              <Image
                src={darkMode ? assets.close_white : assets.close_black}
                alt=''
                className='w-5 cursor-pointer'
              />
            </button>
          </div>
          <span className='w-full border-b border-light mb-4' />
          <li>
            <a href='#top' className='font-Ovo px-10' onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='font-Ovo px-10' onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href='#services' className='font-Ovo px-10' onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href='#work' className='font-Ovo px-10' onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href='#contact' className='font-Ovo px-10' onClick={closeMenu}>
              Contact Me
            </a>
          </li>
          <span className='w-full border-b border-light mt-4' />

          <a
            href=''
            className='px-3 py-2.5 flex justify-between text-center text-light bg-primary border border-dark dark:border-light mx-4 rounded text-lg font-Ovo'
          >
            Download Resume
            {/* <Image
              src={darkMode ? assets.download_icon : assets.download_icon}
              alt='download'
              className='w-8 animate-bounce'
            /> */}
            <BiSolidCloudDownload
              size={28}
              className='w-8 animate-bounce text-light'
            />
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
