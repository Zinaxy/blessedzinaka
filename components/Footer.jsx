import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo_dark} alt='logo' className='w-36 mx-auto' />
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='logo' className='w-6' />
          zinakablessed@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className=''> © 2025 Blessed Zinaka. All rights Reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li className=''>
            <a target='_blank' href='' className=''>
              GitHub
            </a>
          </li>
          <li className=''>
            <a target='_blank' href='' className=''>
              LinkedIn
            </a>
          </li>
          <li className=''>
            <a target='_blank' href='' className=''>
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
