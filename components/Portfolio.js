import styles from '../styles/Portfolio.module.css'

import NeonFlickerEffect from './neonFlickerEffect'


function Portfolio() {
    return(
        <div className={styles.main}>
                    <h2>PORTFOLIO</h2>
        
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