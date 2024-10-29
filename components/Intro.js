import { 
    useEffect, 
    useState 
} from 'react';
import { motion } from 'framer-motion'

import LoadingAnimation from './LoadingAnimation'
import InteractifAnimation from './InteractifAnimation';

function Intro({
    isActif, 
    setIsActif,
}) {

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
        setIsActif(true);
    }
    
    return (
        <div className = "w-full h-full flex justify-start align-end text-white relative">
            <div className = "flex justify-center items-center h-screen l absolute w-full h-full transition-opacity duration-1000 ease-out">
                {isLoading && <LoadingAnimation className="  w-[50%]"/>}
                {showInteractifAnimation && <InteractifAnimation className="z-0"/>}
            </div>
            <div className = "w-full flex flex-col justify-end items-center z-0 md:mb-64 landscape:md:mb-14 landscape:xl:mb-20 landscape:2xl:mb-20"
            >
                <div className = "flex flex-col justify-center items-center">
                    <h1 className="portrait:md:text-8xl portrait:xl:text-9xl lanscape:md:text-6xl landscape:xl:text-7xl">Hello, I'm Leo</h1>
                    <span className="text-base md:text-xl xl:text-4xl landscape:xs:text-lg landscape:sm:text-lg landscape:md:text-2xl">& Welcome to my Portfolio!</span>
                </div>
                <motion.div
                    className = "mask z-1"
                    initial = "closed"
                    animate = {isActif ? "open" : "closed"}
                    variants = {variants}
                    onAnimationComplete = {() => {setIsActif(false);}}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        repeat: 1,
                        repeatType: "reverse",
                        repeatDelay: 1
                    }}
                    style={{
                        transformOrigin: 'center',
                        animation: isRotated ? 'flicker-effect 0.1s linear infinite' : 'none',
                        top: 0,
                        pointerEvents: 'auto' 
                    }}
                    onClick={() => {handleChevronAnimation()}}

                >
                    <img src='/assets/img/double-chevron-up-svgrepo-com.svg'
                         alt='Double Chevron'
                         className="h-20 filter invert rotate-90 "
                        
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Intro