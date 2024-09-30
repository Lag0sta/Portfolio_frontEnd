import { useLayoutEffect } from 'react'

import styles from '../styles/Header.module.css'


function Header({infoRef, portfolioRef, isOpen, contactRef},) {

  //fonction Click scrollant la page vers le top
  function handleScrollAcceuil() {
    console.log('click')

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  //fonction Click scrollant la page vers Infos
  function handleScrollInfo() {
    console.log('Click')
    if (infoRef.current) {
      infoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

   //fonction Click scrollant la page vers Portfolio
   function handleScrollPortfolio() {
    console.log('Click')
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth',
                                            block: 'start' 
                                         });
    }
  }

    //Permet de lancer l'auto scroll de la page uniquement lorsque l'animation est lancé
    useLayoutEffect(() => {
      if (isOpen) {
        handleScrollPortfolio();
      }
    }, [isOpen]);

    // Fonction click scrollant la page vers Contact
  function handleScrollContact() {
    console.log('Click')
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth',
                                          block: 'start'
                                       });
    }
  }

    return (
    <div className = {styles.header}>
      <nav className = {styles.el}>
        <img 
           src = '/assets/img/logo.png' 
           alt = 'logo'
           onClick = {handleScrollAcceuil}/>
        <nav className = {styles.btn}>
          <button onClick = {handleScrollInfo}> Info </button> 
          <button onClick = {handleScrollPortfolio}> Portfolio </button>
          <button onClick = {handleScrollContact}> Contact </button> 
        </nav>
     
      </nav> 
    </div>

    );
}

export default Header ;
