import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from './hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    // la informacion la obtendremos de emailjs

    console.log(form)
    emailjs.send(
      'service_5rdrmzl', //id Service
      'template_5nj62ej', //id template
      {
        //datos
        from_name: form.name,
        to_name: "Yerson",
        from_email: form.email,
        to_email: 'yerson2737182731@gmail.com',
        message: form.message,
      },
      '3grkIt1WqO7S7xDen' //key publica
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. i will get back to you as soon as posible');
        setForm({
          name:'',
          email:'',
          message: '',
        }), (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong');
        }
      })
  }

  return (
    /* overflow-hidden : esconde lo sobresaliente al div*/
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
              type="text" 
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary'
            />
          </label>

          <label htmlFor="" 
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your email</span>
            <input 
              type="email" 
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary'
            />
          </label>

          <label htmlFor="" 
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
            rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >{loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

// permite ademas ir a la seccion que estamos buscando
export default SectionWrapper(Contact, "contact")