'use client';
import About from '@/components/About';
import { BackgroundBeamsDemo } from '@/components/BackgroundBeams';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Work from '@/components/Work';
import { useEffect, useState } from 'react';

const page = () => {
  /* const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    if (
      localStorage.the === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('prefers-color-scheme: dark').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]); */

  return (
    <>
      <Navbar />
      {/* <BackgroundBeamsDemo /> */}
      <HeroSection />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
