import { motion } from "framer-motion";
import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motion";


// este es un componente que retornara una funcion
// High Order Component (HOC) : proporciona funcionalidad
// adicional a un componente ya existente
// en este caso agrega logica comun a varios componentes
export const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      {/* span se usa como un punto de anclaje, ya que nos dirigiras
      hasta aqui cuando apretemos la ruedita desplazante en Hero.jsx  */}
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  )
}
