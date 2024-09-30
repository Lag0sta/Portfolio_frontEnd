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

  return (

    <div className={styles.mainContainer} >

      <div className={styles.header}>
        <Header
          infoRef={infoRef}
          portfolioRef={portfolioRef}
          isOpen={isOpen}
          contactRef={contactRef}
        />
      </div>

      <div className={styles.intro} >
        <Intro isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      <div className={styles.middleContainer}>
        <div className={styles.infos} ref={infoRef}>
          <Infos />
        </div>

        <div className={styles.portfolio} ref={portfolioRef}>
          <Portfolio />
        </div>

      </div>


      <div className={styles.footer} ref={contactRef}>
        <Contact />
      </div>
    </div>

  );
}

export default Home;
