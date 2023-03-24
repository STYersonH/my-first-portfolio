import React from 'react';
//para mostrar las cards con esa animacion tan prrona
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // se pasan propiedades para el div con options
          options={{
            max: 45, // angulo de inclinacion
            scale: 1, // factor de escala, 1 : no sera escalado
            speed: 450  // velocidad de inclinacion, 450ms
          }}
          //justify-evenly -> |   *   *   *   |
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    {/* motion.div para envolver elementos que se desea animar 
      en este caso se esta animando con las propiedades definidas en
      textVariant()*/}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        // direction, type, delay, duracion de la animacion
        variants={fadeIn("","",0.1,1)}
        // leading-[30px] : distancia entre lineas de texto
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and JavaScript with a great experience in frameworks like React, Node.js, Three.js and others. I'm a quick learner, I have a great way working in teams and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. I want to work with you and make your ideas reality!
      </motion.p>

      {/* flex-wrap acomodara los items que ya no quepan abajo */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          //{...service} se pasara como las propiedades title y icon
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

// exportamos About que ha sido envuelto en el comp SectionWrapper
export default SectionWrapper(About, "about")