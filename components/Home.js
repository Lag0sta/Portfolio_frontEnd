import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'


import styles from '../styles/Home.module.css';
import Header from './Header';
import Intro from './Intro'
import Infos from './Infos'
import Portfolio from './Portfolio';
import Contact from './Contact';


function Home() {

  //ref initiale = null => ne pointe pas encore vers un él. DOM
  const infoRef = useRef(null);
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false);

  const [infoClick, setInfoClick] = useState(false);
  const [portfolioClick, setPortfolioClick] = useState(false);
  const [contactClick, setContactClick] = useState(false)

  //Modifie infoClick par Header.js et Infos.js
  const handleInfoClick = (state) => {
    console.log('click Info Title animation'+ infoClick)
    setInfoClick(state);
  };

  const handlePortfolioClick = (state) => {
    console.log('click Info Title animation'+ infoClick)
    setPortfolioClick(state);
  };

  const handleContactClick = (state) => {
    console.log('click Info Title animation'+ infoClick)
    setContactClick(state);
  };

  return (

    <div className={styles.mainContainer} >

      <div className={styles.header}>
        <Header
          infoRef={infoRef}
          portfolioRef={portfolioRef}
          isOpen={isOpen}
          contactRef={contactRef}
          handleInfoClick={handleInfoClick}
          handlePortfolioClick={handlePortfolioClick}
          handleContactClick={handleContactClick}

        />
      </div>

      <div className={styles.intro} >
        <Intro isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      <div className={styles.middleContainer}>
        <div className={styles.infos} ref={infoRef}>
          <Infos 
           infoClick={infoClick}
           handleInfoClick={handleInfoClick}
          />
        </div>

        <div className={styles.portfolio} ref={portfolioRef}>
          <Portfolio 
           portfolioClick={portfolioClick}
           handlePortfolioClick={handlePortfolioClick}
/>
        </div>

      </div>


      <div className={styles.footer} ref={contactRef}>
        <Contact 
         contactClick={contactClick}
         handleContactClick={handleContactClick}/>
      </div>
    </div>

  );
}

export default Home;