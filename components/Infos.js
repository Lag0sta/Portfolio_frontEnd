import { useState } from 'react'

import styles from '../styles/Infos.module.css'
import Skills from './Skills'
import NeonFlickerEffect from './neonFlickerEffect'

function Infos() {
  //variable d'Etat indicant si le toggle sera à gauche ou à droite
  const [active, setActive] = useState('left')
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const cvUrl = './assets/img/CV_LR_2025.jpg'
  const filename = 'CV_LR_2025.jpg'



  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  const handleDownload = () =>{
    if(window.confirm('Are you sure you want to download my Curriculum Vitae?')){
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = filename;
      link.click();
    }
  
  }

  const handleTabChange = (tab, skills) => {
    setActive(tab);
    setSelectedSkills(skills);
  };


  return (
    <div className={styles.main} >

      <h2 id='info'>ABOUT ME</h2>

    <div className={styles.infos}>
    <div className={styles.profil}>
        <div className={styles.imgCv}>
          <img className={styles.portrait} src='/assets/img/portrait_color.png' alt='Portrait' />

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
          <div className={styles.modalContainer}>
            {modalOpen && (
              <div className={styles.modalHeader}>
                <div className={styles.modalHeaderBtn}>
                    <button 
                     className={styles.modalBtn} 
                     onClick={() => {handleDownload()     
                    }}>Download</button>
                  
                  <button className={styles.modalBtn}
                    onClick={closeModal}>Close</button>
                </div>
              </div>
            )}
            {modalOpen && (
              <div className={styles.modalView}>
                <div className={styles.modalContent} >
                  <img
                    src='./assets/img/CV_LR_2025.jpg'
                    className={styles.CV} />
                </div>

              </div>
            )}

          </div>
        )}



      </div>
    </div>
      
    </div>
  )
}

export default Infos