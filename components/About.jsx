import { assets, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiPhoneCall,
} from 'react-icons/bi';
import Skills from './Skills';
import Timeline from './TimeLine';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        <div className=''>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='w-64 sm:w-60 rounded-3xl max-w-none'
          >
            <Image
              src={assets.zinaxy}
              alt='user image'
              className='w-full rounded-3xl'
            />
          </motion.div>{' '}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className='mt-4 text-dark dark:text-light'
          >
            <h5 className=''>SOCIAL LINKS</h5>
            <ul className='flex gap-3 mt-4'>
              <motion.li whileHover={{ scale: 1.2 }} className=''>
                <a href='' className=''>
                  <BiLogoWhatsapp size={42} className='font-extrabold' />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.5 }} className=''>
                <a href='' className=''>
                  <BiLogoLinkedin size={42} />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.5 }} className=''>
                <a href='' className=''>
                  <BiLogoGithub size={42} />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.5 }} className=''>
                <a href='' className=''>
                  <BiLogoGmail size={42} />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.5 }} className=''>
                <a href='' className=''>
                  <BiLogoTwitter size={42} />
                </a>
              </motion.li>
            </ul>
            <p className='mt-4 text-3xl leading-none tracking-wider font-mono flex border border-primary px-2 py-1.5 rounded'>
              <BiPhoneCall className='mr-2' /> +263784484144
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 w-full'
        >
          <p className='mb-10 max-w-2xl font-Ovo'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            ullam est modi nihil molestias eos voluptates suscipit odio ratione
            ad cumque expedita nulla asperiores quisquam eveniet, laborum hic,
            neque corporis exercitationem! Recusandae, adipisci natus.
          </p>
          <Timeline />

          <div className=''>
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className='my-5 text-gray-700 font-Ovo dark:text-white'
            >
              Skills
            </motion.h4>
            <Skills />
          </div>
          <div className=''>
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className='my-5 text-gray-700 font-Ovo dark:text-white'
            >
              Tech & Tools I Use
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className='flex items-center gap-3 sm:gap-5'
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-primary rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                >
                  <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
