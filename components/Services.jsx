import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='services'
        className='w-full px-[12%] py-10 scroll-mt-20'
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mb-2 text-lg font-Ovo'
        >
          What I Offer
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-center text-5xl font-Ovo'
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          repudiandae, maxime illum quia quis ratione, eligendi repellendus
          itaque dicta nihil quasi saepe. Aut, nostrum?
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className='grid grid-cols-auto gap-6 my-10'
        >
          {serviceData.map((item, index) => (
            <a href={`${item.link}`} className='card ' key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image src={item.icon} alt={item.title} className='w-10' />
                <h3 className='text-2xl my-4 text-gray-700 dark:text-light'>
                  {item.title}
                </h3>
                <p className='text-sm tracking-wide text-gray-600 leading-5 dark:text-light'>
                  {item.description}
                </p>
                <button className='flex items-center gap-2 text-sm mt-5'>
                  Read More{' '}
                  <Image
                    src={assets.right_arrow}
                    alt='right arrow'
                    className='w-4 dark:hidden'
                  />
                  <Image
                    src={assets.right_arrow_bold_dark}
                    alt='right arrow '
                    className='w-4 hidden dark:block'
                  />
                </button>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
