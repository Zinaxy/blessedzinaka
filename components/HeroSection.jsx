import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { BiDownload } from 'react-icons/bi';
import { BackgroundBeams } from './ui/background-beams';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const HeroSection = () => {
  const words = [
    {
      text: 'Fullstack',
    },
    {
      text: 'Developer',
    },
    {
      text: '&',
    },
    {
      text: 'Tech ',
    },
    {
      text: 'Enthusiast.',
      className: 'text-primary dark:text-blue-500',
    },
  ];
  return (
    <>
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className='mt-28 lg:mt-0'
        >
          <Image
            src={assets.zinaxy}
            alt='profile img'
            className='rounded-full w-32 '
          />
        </motion.div>{' '}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
        >
          Hi! I'm Blessed Zinaka{' '}
          <Image
            src={assets.hand_icon}
            alt='waving hand icon'
            className='w-6'
          />
        </motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
        >
          {' '}
          <TypewriterEffectSmooth
            words={words}
            className={'text-3xl sm:text-6xl lg:text-[66px] font-Ovo'}
          />
          {/*  Software Developer & Tech Enthusiast */}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='max-w-2xl mx-auto font-Ovo'
        >
          Passionate about building innovative digital solutions, I specialize
          in developing modern, scalable web applications using Laravel, React,
          and Next.js. I thrive on solving complex problems and crafting
          seamless user experiences.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 z-10'>
          <motion.a
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href='#contact'
            className='btn-primary'
          >
            Contact Me{' '}
            <Image
              src={assets.right_arrow_white}
              alt='right arrow'
              className='w-4'
            />
          </motion.a>
          <motion.a
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href='/sample-resume.pdf'
            download
            className='btn-secondary'
          >
            My Resume
            <BiDownload className='w-4' size={28} />
          </motion.a>
          <a href='' className=''></a>
        </div>
      </div>
      <BackgroundBeams />
    </>
  );
};

export default HeroSection;
