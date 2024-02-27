import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export default function ContactForm() {
   
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i4mi8g2","template_jxe6hfi", form.current, {
        publicKey: 'sf2UfMrbrXfLK0IKi',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
        
    return (
        <form ref={form} className="mt-4" onSubmit={sendEmail}>

            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">Name</label>
            <input type="text" name="user_name" id="name" className="bg-grayInput border border-grayInput text-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />


            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white mt-4">Email</label>
            <input type="email" name="user_email" id="email" className="bg-grayInput border border-grayInput text-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />

          
            <label htmlFor="email" className="block mb-2 mt-4 text-sm font-medium text-gray-50 dark:text-white">Message</label>
            <textarea name="message" id="message" className="bg-grayInput border border-grayInput text-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Message" required />


                <button type="submit" className="mt-4 w-full bg-blue-500 text-sm text-white text-center mb-4 rounded-lg h-10 hover:bg-blue-700">Send Email</button>

                       
        </form>
    )
}