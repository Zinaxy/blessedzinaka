import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'motion/react';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'c4fd0dcc-2476-4c89-ad0a-a91eb30a494e');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      toast.success('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        repudiandae, maxime illum quia quis ratione, eligendi repellendus itaque
        dicta nihil quasi saepe. Aut, nostrum?
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type='text'
            name='name'
            className='input-text'
            placeholder='Enter Your Name'
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type='email'
            name='email'
            className='input-text'
            placeholder='Enter Your EmaiL'
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          name='message'
          rows='6'
          id=''
          placeholder='Enter your Message'
          className='input-textarea'
        ></motion.textarea>

        {result ? (
          <p className='mt-4'>{result}</p>
        ) : (
          <motion.button
            whileHover={{ scale1: 1.05 }}
            transition={{ duration: 0.5 }}
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px]'
          >
            Submit Now
            <Image
              src={assets.right_arrow_white}
              alt='right arrow'
              className='w-4'
            />
          </motion.button>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
