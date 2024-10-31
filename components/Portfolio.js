import { useState } from 'react';
import { motion } from 'framer-motion'

import { titleAnimation } from './titleAnimation';


function Portfolio({ handlePortfolioClick, portfolioClick }) {
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

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-center portrait:mt-24 landscape:xs:mt-6 landscape:sm:mt-8 landscape:md:mt-8 landscape:lg:mt-24 landscape:xl:mt-24 landscape:2xl:mt-24">
        <h2 id='info'
          onMouseOver={() => { handleMouseOver(); }}
          onMouseOut={handleMouseOut}
        >
          {randomText || text}
        </h2>
      </div>


      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '20vh' }}>
      <h3 style={{ fontFamily: 'Cascadia Code', color: 'rgb(193, 193, 193)', fontSize: '4vh', textAlign: 'center' }}>_Coming Soon</h3>
          <div className="w-6 h-6 flex flex-row justify-between items-end ml-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                transition: {
                  delay: 1,
                  duration: 4,
                  stagger: 1,
                  repeat: Infinity,
                  repeatDelay: 3,
                },
              }}

              className="h-1 w-1 bg-gray-400"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                transition: {
                  delay: 2,
                  duration: 4,
                  stagger: 1,
                  repeat: Infinity,
                  repeatDelay: 3,                 
                },
              }}
              className="h-1 w-1 bg-gray-400"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                transition: {
                  delay: 3,
                  duration: 4,
                  stagger: 1,
                  repeat: Infinity,
                  repeatDelay: 3,
                },
              }}
              className="h-1 w-1 bg-gray-400"
            />
          </div>

      </div>


    </div>
  )
}

export default Portfolio
