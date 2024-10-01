import { motion } from 'framer-motion';

import styles from '../styles/GlitchEffect.module.css'

function GlitchEffect({ targetElement, backgroundUrl }) {

    const variants = {
        initial: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            backgroundPosition: 0,
        },
        animate: {
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            width: targetElement && Math.random() * targetElement.offsetWidth + 'px',
            height: targetElement && Math.random() * targetElement.offsetHeight + 'px',
            backgroundPosition: Math.random() * 50 + 'px',
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 0.2,
            },
        },
    };


    return (
        <div
            id="container"
            style={{
                position: 'absolute',
                top: targetElement ? targetElement.offsetTop : 0,
      left: targetElement ? targetElement.offsetLeft : 0,
      width: targetElement ? targetElement.offsetWidth : 0,
      height: targetElement ? targetElement.offsetHeight : 0,
      overflow: 'hidden',
                background: `url(${backgroundUrl})`,
                backgroundAttachment: 'fixed',
            }}
        >
            {Array.from({ length: 20 }, (_, i) => (
                <motion.div
                    key={i}
                    className="box"
                    initial="initial"
                    animate="animate"
                    variants={variants}
                    style={{
                        background: `url(${backgroundUrl})`,
                        backgroundAttachment: 'fixed',
                    }}
                />
            ))}
        </div>
    )
}

export default GlitchEffect