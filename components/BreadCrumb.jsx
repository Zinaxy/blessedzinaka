'use client';
import React from 'react';
import { Boxes } from './ui/background-boxes';
import { cn } from '@/lib/utils';

export function BreadCrumb({ title, about }) {
  return (
    <div className='h-96 relative w-full overflow-hidden  dark:bg-dark flex flex-col items-center justify-center rounded-lg'>
      <div className='absolute inset-0 w-full h-full  dark:bg-dark z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
      <Boxes />
      <h1
        className={cn('md:text-4xl text-xl text-white relative z-20 font-bold')}
      >
        {title}
      </h1>
      <p className='text-center mt-2 text-neutral-300 relative z-20'>{about}</p>
    </div>
  );
}
