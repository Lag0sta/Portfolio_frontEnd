import { motion, AnimatePresence  } from 'framer-motion'
import styles from '../styles/Skills.module.css';


function Skills({ active }) {
  const webSkills = [
    { name: 'HTML', value: 80 },
    { name: 'CSS', value: 85 },
    { name: 'Javascript', value: 85 },
    { name: 'React', value: 85 },
    { name: 'React Native', value: 90 },
    { name: 'MongoDB', value: 95 },
  ]

  const designSkills = [
    { name: 'Photoshop', value: 92 },
    { name: 'Illustrator', value: 90 },
    { name: 'After Efffects', value: 80 },
    { name: 'Premiere Pro', value: 75 },
    { name: 'Cinema 4D', value: 70 },
    { name: 'Procreate', value: 97 },
  ]

  let skill
 
  const renderSkillGauges = (skills) => {
    return skills.map((skill, i) => {
      return (
        <motion.div
          key={i}
          className={styles.gaugeContainer}
          style={{ width: `${skill.value}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.gaugeBackground}
            style={{ width: `${skill.value}%` }}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
          >
            <span className={styles.gaugeText}>{skill.name}</span>
            <motion.div
              className={styles.gaugeFill}
              style={{ width: `${skill.value}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.value}%` }}
              exit={{ width: 0 }}
            />
          </motion.div>
        </motion.div>
      )
    })
  }

  if (active === 'left') {
    skill = renderSkillGauges(webSkills)
  } else if (active === 'right') {
    skill = renderSkillGauges(designSkills)
  }

  return (
    <div className={styles.main}>
      <div className={styles.gaugeContainer}>
        <AnimatePresence>
          {skill}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Skills;