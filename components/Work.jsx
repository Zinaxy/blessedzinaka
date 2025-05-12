import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { BiLink } from 'react-icons/bi';
import Badge from './ui/badge';

const Work = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='work'
        className='w-full px-[12%] py-10 scroll-mt-20'
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mb-2 text-lg font-Ovo'
        >
          My Portfolio
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className='text-center text-5xl font-Ovo'
        >
          My Latest Work
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
          className='grid grid-cols-auto my-10 gap-5'
        >
          {workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              style={{
                backgroundImage: `url(${project.bgImage})`,
              }}
            >
              <div className='bg-white dark:bg-dark w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 duration-500 py-3 px-5 flex items-center justify-between group-hover:bottom-7 opacity-100'>
                <div className=''>
                  <h2 className='font-semibold '>{project.title}</h2>

                  <div className='grid grid-cols-3 gap-1'>
                    {project.description.map((item, idx) => (
                      <Badge
                        key={idx}
                        title={item}
                        className={
                          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          href=''
          className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20'
        >
          Show More
          <Image
            src={assets.right_arrow_bold}
            alt='right arrow'
            className='w-4'
          />
        </motion.a>
      </motion.div>
    </>
  );
};

export default Work;
