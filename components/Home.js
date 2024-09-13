import { useRef } from 'react'


import styles from '../styles/Home.module.css';
import Header from './Header';
import Infos from './Infos'
import Portfolio from './Portfolio';
import Contact from './Contact';


function Home() {

  const infoRef = useRef(null);


  function handleScrollInfo() {
    console.log('Click')
  //   if (infoRef.current) {

  //   infoRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'nearest',
  //     inline: 'center'
  //   })
  // }
  }

  return (

  <div className = {styles.mainContainer}>

    <div className = {styles.header}>
      <Header handleScrollInfo={handleScrollInfo}/>
    </div>

    <div className = {styles.intro}>
      <div className={styles.title}>
          <h1>Hello, I'm Leo</h1> 
          <span>& Welcome to my Portfolio!</span>
      </div>
      <button> == </button>
    </div>
    <div className = {styles.main}>
      <h2 id='info'>ABOUT ME</h2>

      <div className={styles.infos} ref={infoRef}>
        <Infos/>
      </div>

      <div className={styles.portfolio}>
      <h2>PORTFOLIO</h2>
        {Portfolio}
      </div>

      </div>
    <div className = {styles.footer}>

      {Contact}
      <img src='/assets/img/linkedin-in-brands-solid.svg' alt='Logo LinkedIn' style={{height: '10vh', fill: 'red', border: 'solid green'}}/> 
      <img src='/assets/img/instagram-brands-solid.svg' alt='Logo Instagram' style={{height: '10vh', background:'#ffffff', border:'solid white'}}/>
      <img src='/assets/img/artstation-brands-solid.svg' alt='Logo Artstation' style={{height: '10vh', color:'white'}} />
      
    </div>
  </div>
  
  );
}

export default Home;
