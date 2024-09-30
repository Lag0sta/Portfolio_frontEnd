import { motion } from 'framer-motion'

const neonFlicker = {
  initial: {
    opacity: 1,
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },
  animate: {
    opacity: [1, 0.2, 1, 0.4, 0.85, 1],
    textShadow: [
      '0 0 10px rgba(0, 0, 0, 0.5)',
      '0 0 5px rgba(0, 0, 0, 0.3)',
      '0 0 10px rgba(0, 0, 0, 0.5)',
      '0 0 5px rgba(0, 0, 0, 0.3)',
      '0 0 10px rgba(0, 0, 0, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
function neonFlickerEffect ({children, delay = 0}) {
   

return(
    <motion.div
    variants={neonFlicker}
    initial="initial"
    animate="animate"
    transition={{ duration: 2, delay: delay }}

  >
    {children}
  </motion.div>
)
}
export default neonFlickerEffect