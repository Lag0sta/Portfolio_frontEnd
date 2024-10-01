
import { useLayoutEffect, useState } from 'react'

import styles from '../styles/Header.module.css'

import { titleAnimation } from './titleAnimation';


function Header({infoRef, portfolioRef, isOpen, contactRef, handleInfoClick, handlePortfolioClick, handleContactClick},) {

  const [infoText, setInfoText] = useState('Info');
  const [infoRandomText, setInfoRandomText] = useState('')
  const [portfolioText, setPortfolioText] = useState('Portfolio');
  const [portfolioRandomText, setPortfolioRandomText] = useState('')
  const [contactText, setContactText] = useState('Contact');
  const [contactRandomText, setContactRandomText] = useState('')

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
      handleInfoClick(true);
      titleAnimation(infoText, setInfoRandomText)
    }
  }


   //fonction Click scrollant la page vers Portfolio
   function handleScrollPortfolio() {
    console.log('Click')
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth',
                                            block: 'start' 
                                         });
      handlePortfolioClick(true);
      titleAnimation(portfolioText, setPortfolioRandomText)

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
      handleContactClick(true);
      titleAnimation(contactText, setContactRandomText)

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
          <button onClick = {handleScrollInfo}> {infoRandomText || infoText}</button> 
          <button onClick = {handleScrollPortfolio}> {portfolioRandomText || portfolioText} </button>
          <button onClick = {handleScrollContact}> {contactRandomText || contactText} </button> 
        </nav>
     
      </nav> 
    </div>

    );
}

export default Header ;
