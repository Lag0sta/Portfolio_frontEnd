import {
  useLayoutEffect,
  useState,
  useEffect
} from 'react'

import { useMediaQuery } from 'react-responsive'

import { titleAnimation } from './titleAnimation';


function Header({
  infoRef,
  portfolioRef,
  isActif,
  contactRef,
  isModalOpen
},) {

  const [infoText, setInfoText] = useState('Info');
  const [infoRandomText, setInfoRandomText] = useState('')
  const [portfolioText, setPortfolioText] = useState('Portfolio');
  const [portfolioRandomText, setPortfolioRandomText] = useState('')
  const [contactText, setContactText] = useState('Contact');
  const [contactRandomText, setContactRandomText] = useState('')

  const [header, setHeader] = useState(null)

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isXs = useMediaQuery({
    query: '(min-width: 0px) and (max-width: 575px)'
  })
  const isSm = useMediaQuery({
    query: '(min-width: 576px) and (max-width: 767px)'
  })
  const isMd = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)'
  });

  const isLg = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1279px) '
  });

  const isXl = useMediaQuery({
    query: '(min-width: 1280px) and (max-width: 1535px)'
  });

  const is2xl = useMediaQuery({
    query: '(min-width: 1536px)'
  });

  //fonction Click scrollant la page vers le top
  const handleScrollAcceuil = () => {
    console.log('Acceuil Click')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  //fonction Click scrollant la page vers Infos
  function handleScrollInfo() {
    if (infoRef.current) {
      window.scrollTo({
        top: infoRef.current.offsetTop,
        behavior: 'smooth'
      });
      titleAnimation(infoText, setInfoRandomText);
    }
  };


  //fonction Click scrollant la page vers Portfolio
  function handleScrollPortfolio() {
    if (portfolioRef.current) {
      window.scrollTo({
        top: portfolioRef.current.offsetTop,
        behavior: 'smooth'
      });
      titleAnimation(portfolioText, setPortfolioRandomText);
    }
  }

  //Permet de lancer l'auto scroll de la page uniquement lorsque l'animation est lancé
  useLayoutEffect(() => {
    if (isActif) handleScrollPortfolio();
  }, [isActif]);

  // Fonction click scrollant la page vers Contact
  function handleScrollContact() {
    if (contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: 'smooth'
      });
      titleAnimation(contactText, setContactRandomText);
    }
  }

  useEffect(() => {
    if (isXs || isSm || isMd) {
      if (isPortrait) {
        setHeader(
          <div className="w-screen">
            <div className=" h-24 from-black/100 to-transparent bg-gradient-to-b backdrop-filter backdrop-blur-sm" />
          </div>
        )
      } else if (isLandscape) {
        setHeader(
          <div>
          <div className="w-screen flex justify-between pointer-events-none">
            <div className="h-screen w-[13%] px-0 mt-0 bg-gradient-to-r from-black/95 to-black/45 p-1.7vh py-0 backdrop-filter backdrop-blur-sm border-r border-white border-opacity-70 pointer-events-none" />

          <div className="h-screen w-[13%] px-0 mt-0 bg-gradient-to-l from-black/90 to-black/55 p-1.7vh py-0 backdrop-filter backdrop-blur-sm border-l border-white border-opacity-70 pointer-events-none"
          />
        </div>
        </div>
        )
      }
    } else if (isLg || isXl || is2xl) {
      setHeader(
        <div className="w-screen landscape:lg:h-24 landscape:xl:h-24 landscape:2xl:h-24 backdrop-filter backdrop-blur-sm">
          <div className=" h-16 from-black/95 to-black/60 bg-gradient-to-b" />
          <div className=" h-8 from-black/60 to-transparent bg-gradient-to-b " />
        </div>
      )
    }
  }, [isXs, isSm, isMd, isLg, isXl, is2xl, isPortrait, isLandscape])


  return (
    <div className='pointer-events-none'>
      <nav className="w-screen absolute pointer-events-none z-10   flex justify-between items-center landscape:xs:h-screen landscape:lg:h-24  portrait:p-2 landscape:lg:px-10 ">
        <img className={`portrait:w-20 landscape:xs:w-24 landscape:lg:w-16 landscape:xs:ml-2 ${isModalOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}
          src='/assets/img/logo.png'
          alt='logo'
          onClick={handleScrollAcceuil}
          onTouchStart={handleScrollAcceuil}

        />
        <nav className={`flex justify-around portrait:justify-evenly landscape:xs:h-full landscape:lg:h-fit landscape:xs:w-28 landscape:lg:mt-1 landscape:lg:w-fit landscape:lg:mx-12 landscape:xs:flex-col landscape:lg:flex-row landscape:xs:items-center ${isModalOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          <button className="bg-[#333] bg-opacity-80 portrait:mr-2 landscape:lg:mx-2"
            onClick={handleScrollInfo}
            onTouchStart={handleScrollInfo}
          >

            {infoRandomText || infoText}
          </button>
          <button className="bg-[#333] bg-opacity-80 portrait:mr-2 landscape:lg:mx-2"
            onClick={handleScrollPortfolio}
            onTouchStart={handleScrollPortfolio}
          >
            {portfolioRandomText || portfolioText}
          </button>
          <button className="bg-[#333] bg-opacity-80 portrait:mr-2 landscape:lg:mx-2 "
            onClick={handleScrollContact}
            onTouchStart={handleScrollContact}

          >
            {contactRandomText || contactText}
          </button>
        </nav>
      </nav>
      <div className="px-0 mt-0 p-1.7vh py-0 pointer-events-none">
        {header}


      </div>
    </div >



  );
}

export default Header;
