import { useState } from 'react'

import styles from '../styles/Infos.module.css'
import Skills from './Skills'
import NeonFlickerEffect from './neonFlickerEffect'
import CvModal from './CvModal'
import ImgGlitchAnimation from './ImgGlitchAnimation'

import { titleAnimation } from './titleAnimation'

function Infos({ infoClick, handleInfoClick }) {
  //variable d'Etat indicant si le toggle sera à gauche ou à droite
  const [active, setActive] = useState('left')
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [text, setText] = useState('ABOUT ME');
  const [randomText, setRandomText] = useState('')

  //Au passage de la souris: activation de titleAnimation()
  const handleMouseOver = () => {
    console.log('Woush')
    titleAnimation(text, setRandomText);
  };

  const handleMouseOut = () => {
    setRandomText('');

  };

  //Reception et reset de la valeur de infoClick de Home.js activé par HandleInfoClick() dans Header.js
  //+ Activation de titleAnimation()
  if (infoClick) {
    console.log('titleAnimation Activated')
    titleAnimation(text, setRandomText);
    handleInfoClick(false)
  }

  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  const handleTabChange = (tab, skills) => {
    setActive(tab);
    setSelectedSkills(skills);
  };
  const [isImgMouseOver, setIsImgMouseOver] = useState(false);

  const handleImgMouseOver = () => {
    setIsImgMouseOver(true);
  };

  const handleImgMouseOut = () => {
    setIsImgMouseOver(false);
  };

  let img;

  if(isImgMouseOver){
    img=(
      <div className={styles.imgCv}>
       
            <ImgGlitchAnimation/>
            <img className={styles.portraitGlitch} 
                 src='/assets/img/portrait_color_NB.png' 
                 alt='Portrait'
                 style={{ position: 'absolute', zIndex: 1,
                 }}

                 />
              <img className={styles.portraitGlitchR} 
                 src='/assets/img/portrait_color_R.png' 
                 alt='Portrait'
                 style={{ position: 'absolute',
                          transform: 'translateX(0.5%)',
                  
                           zIndex: 0,
                           opacity: 1,
                           mask: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4))', // add a gradient mask


                 }}

                 />
                 <img className={styles.portraitGlitchB} 
                 src='/assets/img/portrait_color_B.png' 
                 alt='Portrait'
                 style={{ position: 'absolute',
                           transform: 'translateX(-0.5%)',
                           zIndex: 0,
                           opacity: 0.8,
                           mask: 'linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))', // add a gradient mask

                 }}

                 />

          </div>
    )
  }else{

    img=(
      <div className={`${styles.profil} ${styles.portrait}`}
           

>
    <img className={styles.portrait} 
         src='/assets/img/portrait_color.png' 
         alt='Portrait'
         style={{ position: 'absolute', border:'solid black 3px'}}
         />

      </div>

    )
    
  }

  return (
    <div className={styles.main} >

      <h2 id='info' 
          onMouseOver={() => {
            handleMouseOver();
          }}
          onMouseOut={handleMouseOut}
      >
        {randomText || text}
      </h2>

      <div className={styles.infos}>
        <div className={styles.profil}>
          <div style={{height: '50vh', width: '50vh', borderRadius: '50%'}}
               onMouseOver={handleImgMouseOver}
               onMouseOut={handleImgMouseOut}
           >
          {img}

           </div>

          <p>FullStack Develloper with illustration and Motion Graphics background, I have serious passion for UI effects and animations</p>
        </div>

        <div className={styles.skills}>

          <div className={styles.skillDuoToggleSwitch}>
            <div className={styles.toggleLine}>
              <div className={`${styles.toggleHandle} ${active === 'left' ? styles.left : styles.right}`} />

            </div>


            <div className={styles.btnToggleSwitch}>
              <button
                className={active === 'left' ? styles.active : styles.inactive} //if(active === 'left) => styles.active. Else => ''
                onClick={() => handleTabChange('left')}
              >
                <NeonFlickerEffect>
                  <span>DEV</span>
                </NeonFlickerEffect>

              </button>
              <button
                className={active === 'right' ? styles.active : styles.inactive} //if(active === 'right') => styles.active. Else => ''
                onClick={() => handleTabChange('right')}
              >
                <NeonFlickerEffect delay={1.35}>
                  <span>DESIGN</span>
                </NeonFlickerEffect>
              </button>
            </div>

          </div>
          <div className={styles.skills}>
            <Skills
              active={active}
            />
          </div>
          <button
            className={styles.btnCV}
            onClick={() => openModal()}
          >
            <NeonFlickerEffect delay={0.5}>
              <span data-text='CV'>CV</span>
            </NeonFlickerEffect>
          </button>

          {modalOpen && (
            <CvModal
             isOpen={modalOpen}
             onClose={closeModal}
            />
           
          )}



        </div>
      </div>

    </div>
  )
}

export default Infos