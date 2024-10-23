
import {
  useState,
  useEffect
} from 'react'
import { motion } from 'framer-motion'
import { titleAnimation } from './titleAnimation'

import styles from '../styles/Infos.module.css'
import Skills from './Skills'
import NeonFlickerEffect from './neonFlickerEffect'
import CvModal from './CvModal'
import ImgGlitchAnimation from './ImgGlitchAnimation'


function Infos({
  infoClick,
  handleInfoClick
}) {
  //variable d'Etat indicant si le toggle sera à gauche ou à droite
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState('ABOUT ME');
  const [randomText, setRandomText] = useState('')
  const [isImgMouseOver, setIsImgMouseOver] = useState(false)

  //Reception et reset de la valeur de infoClick de Home.js activé par HandleInfoClick() dans Header.js
  //+ Activation de titleAnimation()
  useEffect(() => {
    if (infoClick) {
      titleAnimation(text, setRandomText);
      handleInfoClick(false);
    }
  }, [infoClick]);

  //Au passage de la souris: activation de titleAnimation()
  const handleMouseOver = () => {
    titleAnimation(text, setRandomText);
  };

  const handleMouseOut = () => {
    setRandomText('');

  };

  const handleImgMouseOver = () => {
    console.log('bing')
    setIsImgMouseOver(true);
  };

  const handleImgMouseOut = () => {
    setIsImgMouseOver(false);
  };

  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div classname="w-full h-full border">

      <div className=" flex justify-center mt-24 landscape:xs:mt-8 landscape:sm:mt-8 landscape:md:mt-8 landscape:lg:mt-24 landscape:xl:mt-24 landscape:2xl:mt-24">
        <h2 className=""
          id='info'
          onMouseOver={() => { handleMouseOver() }}
          onMouseOut={handleMouseOut}
        >
          {randomText || text}
        </h2>
      </div>

      <div className="h-full w-full px-5 flex flex-row flex-wrap justify-evenly landscape:justify-center ">
        <div className="h-fit w-fit mt-2 flex flex-col justify-center landscape:mt-3  landscape:mr-5 landscape:md:mr-10">
          <div className=" w-64 h-64 mx-auto landscape:xs:w-3632 landscape:sm:w-36 landscape:md:w-36 landscape:lg:w-64 landscape:xl:w-64 landscape:2xl:w-64 landscape:xs:h-32 landscape:sm:h-32 landscape:md:h-32 landscape:lg:h-64 landscape:xl:h-64 landscape:2xl:h-64 landscape:md:mt-4"
            onMouseOver={handleImgMouseOver}
            onTouchStart={handleImgMouseOver}
            onMouseOut={handleImgMouseOut}
            onTouchEnd={handleImgMouseOver}
          >
            {isImgMouseOver ? (

              <ImgGlitchAnimation />

            ) : (
              <img className="border border-[2px] border-black rounded-full"
                src="/assets/img/portrait_color.png"
                alt="Portrait"
              />
            )}
          </div>
          <div>
          <p className="portrait:text-sm portrait:w-full landscape:text-xs landscape:md:text-sm landscape:w-40 landscape:md:w-64 mt-4 landscape:mt-5">FullStack Develloper with illustration and Motion Graphics background, I have serious passion for UI effects and animations</p>

          </div>
          
        </div>

        <div className="w-fit h-fit flex flex-col justify-evenly flex-wrap mt-10 landscape:mt-4 landscape:ml-5">
          <Skills/>
          <div className="flex justify-end ">
            <button className=" w-12 h-10 landscape:w-10 landscape:h-8 landscape:md:w-12 landscape:md:h-10 mt-2 cursor-pointer"
              onClick={() => openModal()}
              onTouchStart={() => openModal()}
            >
              <NeonFlickerEffect delay={0.5}>
                <span data-text='CV'>CV</span>
              </NeonFlickerEffect>
            </button>
          </div>
        </div>



        {modalOpen && (
          <CvModal
            isOpen={modalOpen}
            onClose={closeModal}
          />
        )}
      </div>

    </div>
  )
}

export default Infos
