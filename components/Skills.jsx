import React from 'react';
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
} from 'react-icons/bi';
import { motion } from 'motion/react';

const Skills = () => {
  const skills = [
    {
      title: 'CSS3',
      icon: <BiLogoCss3 size={32} className='border rounded-full' />,
    },
    {
      title: 'HTML5',
      icon: <BiLogoHtml5 size={32} className='border rounded-full ' />,
    },
    {
      title: 'Tailwind',
      icon: <BiLogoTailwindCss size={32} className='border rounded-full ' />,
    },
    {
      title: 'PHP',
      icon: <BiLogoPhp size={32} className='border rounded-full ' />,
    },
    {
      title: 'JavaScript',
      icon: <BiLogoJavascript size={32} className='border rounded-full ' />,
    },
    {
      title: 'ReactJS',
      icon: <BiLogoReact size={32} className='border rounded-full ' />,
    },
    {
      title: 'Laravel',
      icon: (
        <svg
          viewBox='0 0 40 42'
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 fill-current  dark:text-white border rounded-full'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M17.2 5.63325L8.6 0.855469L0 5.63325V32.1434L16.2 41.1434L32.4 32.1434V23.699L40 19.4767V9.85547L31.4 5.07769L22.8 9.85547V18.2999L17.2 21.411V5.63325ZM38 18.2999L32.4 21.411V15.2545L38 12.1434V18.2999ZM36.9409 10.4439L31.4 13.5221L25.8591 10.4439L31.4 7.36561L36.9409 10.4439ZM24.8 18.2999V12.1434L30.4 15.2545V21.411L24.8 18.2999ZM23.8 20.0323L29.3409 23.1105L16.2 30.411L10.6591 27.3328L23.8 20.0323ZM7.6 27.9212L15.2 32.1434V38.2999L2 30.9666V7.92116L7.6 11.0323V27.9212ZM8.6 9.29991L3.05913 6.22165L8.6 3.14339L14.1409 6.22165L8.6 9.29991ZM30.4 24.8101L17.2 32.1434V38.2999L30.4 30.9666V24.8101ZM9.6 11.0323L15.2 7.92117V22.5221L9.6 25.6333V11.0323Z'
          />
        </svg>
      ),
    },
    {
      title: 'SQL',
      icon: <BiLogoPostgresql size={32} className='border rounded-full ' />,
    },
    {
      title: 'GIT',
      icon: <BiLogoGit size={32} className='border rounded-full ' />,
    },
  ];
  return (
    <>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className='flex items-center gap-3 sm:gap-5'
      >
        {skills.map((skill, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            className='list-skill'
            key={index}
          >
            {skill.icon}{' '}
            <span className='hidden md:block hover:block'>{skill.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Skills;
