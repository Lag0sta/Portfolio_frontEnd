import {
  useRef,
  useState
} from 'react'

import styles from '../styles/Home.module.css';
import Header from './Header';
import Intro from './Intro'
import Infos from './Infos'
import Portfolio from './Portfolio';
import Contact from './Contact';

function Home() {

  //ref initiale = null => ne pointe pas encore vers un él. DOM
  const infoRef = useRef(null);
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false);
  const [infoClick, setInfoClick] = useState(false);
  const [portfolioClick, setPortfolioClick] = useState(false);
  const [contactClick, setContactClick] = useState(false)

  //Modifie infoClick par Header.js et Infos.js
  const handleInfoClick = (state) => {
    console.log('click Info Title animation' + infoClick)
    setInfoClick(state);
  };

  //Modifie PortfolioClick par Header.js et Infos.js
  const handlePortfolioClick = (state) => {
    console.log('click Info Title animation' + infoClick)
    setPortfolioClick(state);
  };

  //Modifie ContactClick par Header.js et Infos.js
  const handleContactClick = (state) => {
    console.log('click Info Title animation' + infoClick)
    setContactClick(state);
  };

  return (
    <div className="max-w-screen xs:max-w-screen mx-auto">
        
      {/* main-container */}
      <div className="max-w-full h-full mx-0 grid grid-cols-4 grid-rows-4  md-blur relative  bg-black overflow-y-hidden" >

        {/* Header-container */}
        <div className="z-50 fixed pointer-events-none">

          <Header className="z-50"
                  infoRef={infoRef}
                  portfolioRef={portfolioRef}
                  isOpen={isOpen}
                  contactRef={contactRef}
                  handleInfoClick={handleInfoClick}
                  handlePortfolioClick={handlePortfolioClick}
                  handleContactClick={handleContactClick}
          />
        </div>
      
        {/* intro-container */}
        <div className="w-full col-start-1 col-end-5 row-start-1 row-end-2 max-h-screen bg-black z-0 " >
          <Intro isOpen={isOpen}
                 setIsOpen={setIsOpen}
          />
        </div>

        {/* middle-container */}
        <div className="flex flex-col justify-around  col-start-1 col-end-5 row-start-2 row-end-4 bg-white w-full">

          <div className=" w-full portrait:md:h-screen"
               ref={infoRef}
          >
            <Infos infoClick={infoClick}
                   handleInfoClick={handleInfoClick}
            />
          </div>

          <div className="min-h-screen w-full"
               ref={portfolioRef}
          >
            <Portfolio portfolioClick={portfolioClick}
                       handlePortfolioClick={handlePortfolioClick}
            />
          </div>

        </div>

        <div className="col-start-1 col-end-5 row-start-4 row-end-5 h-screen w-full"
             ref={contactRef}
        >
          <Contact contactClick={contactClick}
                   handleContactClick={handleContactClick}
          />
        </div>
      </div>
    </div>


  );
}

export default Home;