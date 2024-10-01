import { useState } from 'react';
import styles from '../styles/Portfolio.module.css'

import NeonFlickerEffect from './neonFlickerEffect'
import { titleAnimation } from './titleAnimation';


function Portfolio({handlePortfolioClick, portfolioClick}) {
  const [text, setText] = useState('PORTFOLIO');
  const [randomText, setRandomText] = useState('')

  //Au passage de la souris: activation de titleAnimation()
  const handleMouseOver = () => {
    console.log('Woush')
    titleAnimation(text, setRandomText);
  };

  const handleMouseOut = () => {
    setRandomText('');
    
  };

  if (portfolioClick) {
    console.log('titleAnimation Activated')
    titleAnimation(text, setRandomText);
    handlePortfolioClick(false)
  }

    return(
        <div className={styles.main}>
                    <h2 id='info' onMouseOver={() =>{
                      handleMouseOver(); 
                    }} 
                    onMouseOut={handleMouseOut} 
      >
        {randomText || text}
      </h2>
        
            <div style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'center', paddingTop: '20vh'}}>
            <h3 style={{fontFamily: 'Cascadia Code', color:'rgb(193, 193, 193)',fontSize: '4vh' ,textAlign: 'center'}}>_Coming Soon</h3>
             <div className={styles.dots}>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
          <div className={styles.dot3}></div>
            </div>
             
        </div>
           

        </div>
    )
}

export default Portfolio
