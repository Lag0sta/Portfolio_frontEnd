import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

import styles from '../styles/Intro.module.css'

import LoadingAnimation from './LoadingAnimation'
import InteractifAnimation from './InteractifAnimation';

function Intro({isOpen, setIsOpen,}) {

    const [isLoading, setIsLoading] = useState(true);
    const [showInteractifAnimation, setShowInteractifAnimation] = useState(false);

    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowInteractifAnimation(true);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
      }, []);

    //Fonction choisissant l'angle d'animation du chevron pour l'animation
    const variants = {
        closed: { rotate: 0 },
        open: { rotate: 90 },
    };

    //Fonction activant l'animation du chevron
    const handleChevronAnimation = () => {
        console.log('Click')
        setIsOpen(true);
    }
    

    return (
        <div className={styles.mainContainer} style={{  overflow: 'hidden'}}>
            <div className={styles.loading}>
                {isLoading && <LoadingAnimation />}
                {showInteractifAnimation && (
                    <InteractifAnimation />
                )}
            </div>
            <div className={styles.title} style={{
                position: 'absolute', zIndex: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '40px',
                marginBottom: '10vh',
            }}>
                <div className={styles.intro}>
                    <h1>Hello, I'm Leo</h1>
                    <span>& Welcome to my Portfolio!</span>
                </div>
                <motion.div
                    className="doubleChevron"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                    onAnimationComplete={() => {
                        setIsOpen(false);
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        repeat: 1,
                        repeatType: "reverse",
                        repeatDelay: 1
                    }}
                    onClick={() => {
                        handleChevronAnimation();
                    }}
                    style={{
                        transformOrigin: 'center',
                        animation: isRotated ? 'flicker-effect 0.1s linear infinite' : 'none',

                    }}
                >
                    <img
                        src='/assets/img/double-chevron-up-svgrepo-com.svg'
                        alt='Double Chevron'
                        className={styles.doubleChevron}
                        style={{
                            height: '15vh',
                            filter: 'invert(1)',
                            rotate: '90deg',
                            marginTop: '10vh'
                        }}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Intro