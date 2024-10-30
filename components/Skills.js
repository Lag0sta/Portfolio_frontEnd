import {
  useState,
  useRef
} from 'react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import NeonFlickerEffect from './neonFlickerEffect';

function Skills() {
  const webSkills = [
    { name: 'HTML', value: 80 },
    { name: 'CSS', value: 85 },
    { name: 'Javascript', value: 85 },
    { name: 'React/ReactNative', value: 90 },
    { name: 'Tailwind', value: 85 },
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
  const [active, setActive] = useState('left')




  const handleTabChange = (newActive) => {
    setActive(newActive);
  };

  const buttonClass = ` mr-2 w-auto  py-2 px-3 rounded-sm  scale-[90%]`;
  const activeClass = active === 'left' ? ' text-white  scale-[110%]  translate-x-1 -translate-y-0.5' : ' text-white   scale-[110%] translate-x-0 -translate-y-0.1';

  const renderSkillGauges = (skills) => {
    const previousWidth = useRef(0);

    return skills.map((skill, i) => {
      return (
        <motion.div
          key={i}
          className="h-6 w-[full] ml-[20px] mb-4 landscape:xs:mb-1.5 landscape:lg:mb-6 landscape:lg:ml-3 transition-width-[0.5s]-ease-in-out"
          style={{ width: `${skill.value}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span className={" landscape:lg:ml-3 text-xs scale-y-[90%] "}>{skill.name}</span>

          <motion.div className="w-72 h-2 bg-gray-300 rounded-md border border-gray-300 landscape:xs:w-72 landscape:lg:w-96 landscape:xl:w-96 landscape:2xl:w-96 landscape:lg:ml-3"
            animate={{ x: 0 }}
            exit={{ x: 100 }}

          >
            <motion.div
              className="bg-gray-700 h-full rounded-full "
              style={{ width: `${skill.value}%` }}
              initial={{ width: previousWidth.current }}
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
    <div className="w-full h-full flex flex-col ">
      <div className=" flex justify-center  w-fit relative">
        <motion.div
          className="w-1 h-1 rounded-full bg-black absolute left-0 -top-0.5"
          initial={{ translateY: -6, translateX: 50 }}
          animate={{ translateY: -6, translateX: active === 'left' ? 50 : 125 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0 }}

        />
        <motion.div
          className="w-1 h-1 rounded-full bg-black opacity-[50%] absolute left-0 -top-0.5"
          initial={{ translateY: -6, translateX: 50 }}
          animate={{ translateY: -6, translateX: active === 'left' ? 50 : 125 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}

        />

        <motion.div
          className="w-1 h-1 rounded-full bg-black opacity-[25%] absolute left-0 -top-0.5"
          initial={{ translateY: -6, translateX: 50 }}
          animate={{ translateY: -6, translateX: active === 'left' ? 50 : 125 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.15 }}

        />
        <div className="flex ml-5">
          {['left', 'right'].map((tab, index) => (
            <button
              key={tab}
              className={`${buttonClass} ${tab === active ? activeClass : 'bg-gray-200 text-gray-500'}`}
              onClick={() => handleTabChange(tab)}
              onTouchStart={() => handleTabChange(tab)}
            >
              <NeonFlickerEffect delay={index === 1 ? 1.35 : 0}>
                <span>{tab === 'left' ? 'DEV' : 'DESIGN'}</span>
              </NeonFlickerEffect>
            </button>
          ))}
        </div>
      </div>
      <div className="h-fit w-full my-1 transition-width-[0.5s]-ease-in-out">
        <AnimatePresence>
          {skill}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Skills;