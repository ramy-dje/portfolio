import React, { useState } from 'react'
import { theBlack } from '../utils/colors'
import MagneticButton from './MagneticButton'
import Magnetic from '../utils/Magnetic'
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, import.meta.env.VITE_PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (err) => {
        console.error('Failed to send email. Error:', err);
      });
  };

  return (
    <section id='contact' className='md:p-16 p-4  text-white' style={{backgroundColor:theBlack}}>
        <h1 className='text-4xl'>Let ’s start working on a project together</h1>
        <div className='flex flex-col-reverse md:flex-row md:items-center justify-between'>
                <div className='mt-16 md:w-6/12'>
                    <div className='flex flex-col justify-between h-[100px] border-b-1 border-t-1 p-4  border-gray-400'>
                        <p className='text-2xl ' > what's your name ?</p>
                        <input 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className='text-gray-400 border-none bg-none focus:outline-none placeholder:text-gray-400' 
                          placeholder='your name'
                        />
                    </div>
                    <div className='flex flex-col justify-between h-[100px] border-b-1  p-4  border-gray-400'>
                        <p className='text-2xl ' > what's your email ?</p>
                        <input 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className='text-gray-400 border-none bg-none focus:outline-none placeholder:text-gray-400' 
                          placeholder='your email'
                        />
                    </div>
                    <div className='flex flex-col border-b-1  p-4  border-gray-400'>
                        <p className='text-2xl ' > what's your message ?</p>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="text-gray-400 pt-3 h-24 border-none bg-none focus:outline-none placeholder:text-gray-400 resize-none w-full h-32"
                          placeholder="Your message"
                        />
                    </div>
                    <div className='h-[200px] relative'>
                        <div className='h-[1px] w-full bg-gray-400 absolute top-[50%]'></div>
                        <div onClick={sendEmail} className='absolute top-1/2 right-0 transform -translate-y-1/2 '>
                            <MagneticButton isSMall title={'send'}/>
                        </div>
                    </div>
                    
                </div>
            <div className='md:w-4/12 mt-12 md:mt-0'>
                <img src="ramy2.png" alt="" className='w-[130px] h-[130px]  rounded-full'/>
                <h1 className='mt-8 mb-2 text-gray-400 text-2xl'>contact</h1>
                <p className='text-lg'>+231 0782100526</p>
                <p className='text-lg'>ramyromirso@gmail.com</p>
                <h1 className='mt-8 mb-2 text-gray-400 text-2xl'>socials</h1>
                <Magnetic modify={0.05}>
                    <a href='https://www.linkedin.com/in/rami-djebeli' target='_blank' className='text-lg cursor-pointer'>linkedin</a>
                </Magnetic>
                <Magnetic modify={0.05}>
                    <a href='https://github.com/ramy-dje' target='_blank' className='text-lg cursor-pointer'>github</a>
                </Magnetic>
                

            </div>
        </div>
    </section>
  )
}

export default Contact