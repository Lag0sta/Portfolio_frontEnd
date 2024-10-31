
import {
  useState,
  useEffect
} from 'react'

import { titleAnimation } from './titleAnimation'

import Skills from './Skills'
import NeonFlickerEffect from './neonFlickerEffect'
import CvModal from './CvModal'
import ImgGlitchAnimation from './ImgGlitchAnimation'


function Infos({
  infoClick,
  handleInfoClick,
  openModal,
  closeModal,
  isModalOpen
}) {
  //variable d'Etat indicant si le toggle sera à gauche ou à droite
  const [text, setText] = useState('ABOUT ME');
  const [randomText, setRandomText] = useState('')
  const [isImgMouseOver, setIsImgMouseOver] = useState(false)
  

  //Reception et reset de la valeur de infoClick de Home.js activé par HandleInfoClick() dans Header.js
  //+ Activation de titleAnimation()
  useEffect(() => {
    if (infoClick) {
      titleAnimation(text, setRandomText);
      handleInfoClick(false);
    }
  }, [infoClick]);

  //Au passage de la souris: activation de titleAnimation()
  const handleMouseOver = () => {
    titleAnimation(text, setRandomText);
  };

  const handleMouseOut = () => {
    setRandomText('');

  };

  const handleImgMouseOver = () => {
    console.log('bing')
    setIsImgMouseOver(true);
  };

  const handleImgMouseOut = () => {
    setIsImgMouseOver(false);
  };

 

  return (
    <div classname="w-[full] h-full ">

      <div className=" flex justify-center mt-20 landscape:xs:mt-6 landscape:lg:mt-24">
        <h2 className=""
          id='info'
          onMouseOver={() => { handleMouseOver() }}
          onMouseOut={handleMouseOut}
        >
          {randomText || text}
        </h2>
      </div>

      <div className="h-full w-full px-5 flex flex-row flex-wrap justify-evenly landscape:justify-center landscape:w-[74%] landscape:px-0 landscape:translate-x-[17.55%] ">
        <div className="h-fit w-fit mt-2 flex flex-col justify-center landscape:w-[30%]   landscape:mt-3">
          <div className=" portrait:xs:w-56 portrait:xs:h-56 portrait:lg:w-64 portrait:lg:h-64 mx-auto landscape:xs:w-32 landscape:lg:w-64  landscape:xs:h-32 landscape:lg:h-64 landscape:xs:mt-2"
            onMouseOver={handleImgMouseOver}
            onTouchStart={handleImgMouseOver}
            onMouseOut={handleImgMouseOut}
            onTouchEnd={handleImgMouseOver}
          >
            {isImgMouseOver ? (

              <ImgGlitchAnimation />

            ) : (
              <img className="border border-[2px] border-black rounded-full"
                src="/assets/img/portrait_color.png"
                alt="Portrait"
              />
            )}
          </div>
          <div>
          <p className="portrait:xs:text-sm portrait:lg:text-base portrait:xs:w-56 portrait:lg:w-64 landscape:xs:text-xs landscape:lg:text-sm landscape:w-fit landscape:md:fit mt-4 landscape:mt-5 ">FullStack Developer with illustration and Motion Graphics background, I have a serious passion for UI effects and animations</p>

          </div>
          
        </div>

        <div className="w-fit h-fit flex flex-col justify-evenly flex-wrap mt-10 landscape:xq:w-[64%] landscape:mt-4 landscape:lg:ml-10">
          <Skills/>
          <div className="flex justify-end ">
            <button className=" w-12 h-10  landscape:w-10 landscape:h-8 landscape:lg:w-[52px] landscape:lg:h-[44px] mt-2 cursor-pointer"
              onClick={() => openModal()}
              onTouchStart={() => openModal()}
            >
              <div className="flex justify-evenly">
              <span className="text-sm xs:text-xs opacity-60 mt-1">&lt;</span>
              <NeonFlickerEffect delay={0.5}>
                <span data-text='CV' className="xs:text-sm">CV</span> 
              </NeonFlickerEffect>
              <span className="text-sm xs:text-xs opacity-60 mt-1">/&gt;</span>
              </div>
            </button>
          </div>
        </div>



       
      </div>
      {isModalOpen && (
          <CvModal
            closeModal={closeModal}
            isModalOpen={isModalOpen}
          />
        )}

    </div>
  )
}

export default Infos
