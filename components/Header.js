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
  isOpen,
  contactRef,
  handleInfoClick,
  handlePortfolioClick,
  handleContactClick
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

  //fonction Click scrollant la page vers X + activation d'animation

  function scroll(ref, text, setText) {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      titleAnimation(text, setText);
    }
  };

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
    scroll(infoRef, infoText, setInfoRandomText);
    handleInfoClick(true);
  };


  //fonction Click scrollant la page vers Portfolio
  function handleScrollPortfolio() {
    scroll(portfolioRef, portfolioText, setPortfolioRandomText);
    handlePortfolioClick(true);
  }

  //Permet de lancer l'auto scroll de la page uniquement lorsque l'animation est lancé
  useLayoutEffect(() => {
    if (isOpen) handleScrollPortfolio();
  }, [isOpen]);

  // Fonction click scrollant la page vers Contact
  function handleScrollContact() {
    scroll(contactRef, contactText, setContactRandomText);
    handleContactClick(true);
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
            <div className="h-screen w-28 px-0 mt-0 bg-gradient-to-r from-black/95 to-black/45 p-1.7vh z-999 py-0 backdrop-filter backdrop-blur-sm border-r border-white border-opacity-70 pointer-events-none" />

          <div className="h-screen w-28 px-0 mt-0 bg-gradient-to-l from-black/90 to-black/55 p-1.7vh z-999 py-0 backdrop-filter backdrop-blur-sm border-l border-white border-opacity-70 pointer-events-none"
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
      <nav className="absolute z-20 flex justify-between items-center landscape:xs:h-screen landscape:sm:h-screen landscape:md:h-screen landscape:lg:h-24 landascape:xl:h-24 landscape:2xl:h-24 w-screen portrait:p-2 landscape:lg:px-10 landscape:xl:px-10 landscape:2xl:px-10 pointer-events-none">
        <img className="portrait:w-20 landscape:xs:w-24 landscape:sm:w-24 landscape:md:w-24 landscape:lg:w-16 landscape:xl:w-16 landscape:2xl:w-16 landscape:xs:ml-2 landscape:sm:ml-2 landscape:md:ml-2 pointer-events-auto"
          src='/assets/img/logo.png'
          alt='logo'
          onClick={handleScrollAcceuil}
          onTouchStart={handleScrollAcceuil}

        />
        <nav className="flex justify-around portrait:justify-evenly landscape:xs:h-full landscape:sm:h-full landscape:md:h-full landscape:lg:h-fit landscape:xl:h-fit landscape:2xl:h-fit landscape:xs:w-28 landscape:sm:w-28 landscape:md:w-28 landscape:lg:mt-1 landscape:xl:mt-1 landscape:2xl:mt-1 landscape:lg:w-fit landscape:xl:w-fit landscape:2xl:w-fit landscape:lg:mx-12 landscape:xl:mx-12 landscape:2xl:mx-12 landscape:xs:flex-col landscape:sm:flex-col landscape:md:flex-col landscape:lg:flex-row landscape:xl:flex-row landscape:2xl:flex-row landscape:xs:items-center landscape:sm:items-center landscape:md:items-center pointer-events-auto">
          <button className="bg-[#333] bg-opacity-80 portrait:mr-2 landscape:lg:mx-2 landscape:xl:mx-2 landscape:2xl:mx-2"
            onClick={handleScrollInfo}
            onTouchStart={handleScrollInfo}
          >

            {infoRandomText || infoText}
          </button>
          <button className="bg-[#333] bg-opacity-80 portrait:mr-2 landscape:lg:mx-2 landscape:xl:mx-2 landscape:2xl:mx-2 "
            onClick={handleScrollPortfolio}
            onTouchStart={handleScrollPortfolio}
          >
            {portfolioRandomText || portfolioText}
          </button>
          <button className="bg-[#333] bg-opacity-80 portrait:mr-2 landscape:lg:mx-2 landscape:xl:mx-2 landscape:2xl:mx-2"
            onClick={handleScrollContact}
            onTouchStart={handleScrollContact}

          >
            {contactRandomText || contactText}
          </button>
        </nav>
      </nav>
      <div className="px-0 mt-0 p-1.7vh z-999 py-0 pointer-events-none">
        {header}


      </div>
    </div >



  );
}

export default Header;
