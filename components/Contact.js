import { useState } from 'react'

import emailjs from 'emailjs-com';

import { titleAnimation } from './titleAnimation';

function Contact({ contactClick, handleContactClick }) {

  const [email, setEmail] = useState('')
  const [object, setObject] = useState('')
  const [message, setMessage] = useState('')

  const [text, setText] = useState('CONTACT');
  const [randomText, setRandomText] = useState('')

  //Au passage de la souris: activation de titleAnimation()
  const handleMouseOver = () => {
    console.log('Woush')
    titleAnimation(text, setRandomText);
  };

  const handleMouseOut = () => {
    setRandomText('');

  };

  if (contactClick) {
    console.log('titleAnimation Activated')
    titleAnimation(text, setRandomText);
    handleContactClick(false)
  }
  const sendEmail = (e) => {
    emailjs.send(
      'service_0hntmxk',
      'template_yxuxv32',
      {
        email: { email },
        object: JSON.stringify(object).replace(/"/g, ''),
        message: JSON.stringify(message).replace(/"/g, ''),
      },
      'uXAj8aog0DPG2zY4_'
    )
      .then((response) => {
        console.log('Message Send'),
          setEmail('');
        setObject('');
        setMessage('');
      })
      .catch((err) => {
        console.log('FAILED TO SEND...', err)
      });
  };

  //Fonction Click ouvrant un nouvel onglet vers LinkedIn
  const handleClickLinkedin = () => {
    window.open('https://be.linkedin.com/in/leo-ronnet-266b8184', '_blank');
  }

  //Fonction Click ouvrant un nouvel onglet vers Github
  const handleClickGithub = () => {
    window.open('https://github.com/Lag0sta')
  }

  //Fonction Click ouvrant un nouvel onglet vers Instagram
  const handleClickInstagram = () => {
    window.open('https://www.instagram.com/leoronnet/', '_blank')
  }

  //Fonction Click ouvrant un nouvel onglet vers ArtStation
  const handleClickArtstation = () => {
    window.open('https://www.artstation.com/loen-tenor', 'blank')
  }

  const year = new Date().getFullYear();

  return (
    <div className="h-full w-full bg-black">
      <div className="flex justify-center portrait:mt-24 landscape:xs:mt-6 landscape:sm:mt-6 landscape:md:mt-6 landscape:lg:mt-24 landscape:xl:mt-24 landscape:2xl:mt-24">
      <h2 className="text-white"
          id='info'
          onMouseOver={() => {
            handleMouseOver();
          }}
          onMouseOut={handleMouseOut}
        >
          {randomText || text}
        </h2>
      </div>
      
      <div className="w-screen flex flex-col landscape:xs:flex-row landscape:sm:flex-row landscape:md:flex-row landscape:lg:flex-col landscape:xl:flex-col landscape:2xl:flex-col landscape:justify-center landscape:items-center">
      <div className="landscape:w-1/3 flex flex-col justify-evenly items-center landscape:mr-6 ">
        
        <input className=""
               type='text'
               placeholder=' enter your @mail adress'
               onChange={(e) => setEmail(e.target.value)}
               value={email}
        />
        <input type='text'
               placeholder=' write your query here'
               onChange={(e) => setObject(e.target.value)}
               value={object}
        />
        <input className="h-[30vh]"
          type='text'
          placeholder=' write your msg here'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="h-12 w-20 mt-3 bg-black border border-white font-bold text-white text-opacity-80"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          onClick={sendEmail}
        >
          SEND
        </button>
      </div>

      <div className="w-full flex justify-evenly mt-20 landscape:xs:mt-0 landscape:sm:mt-0 landscape:md:mt-0 landscape:lg:mt-14 landscape:xl:mt-14 landscape:2xl:mt-14 landscape:xs:ml-6 landscape:sm:ml-6 landscape:md:ml-6 landscape:lg:ml-0 landscape:xl:ml-0 landscape:2xl:ml-0 landscape:xs:w-fit landscape:sm:w-fit landscape:md:w-fit landscape:lg:w-full landscape:xl:w-full landscape:2xl:w-full landscape:xs:flex-col landscape:sm:flex-col landscape:md:flex-col landscape:lg:flex-row landscape:xl:flex-row landscape:2xl:flex-row landscape:xs:justify-between landscape:sm:justify-between landscape:md:justify-between landscape:lg:justify-evenly landscape:xl:justify-evenly landscape:2xl:justify-evenly"
      >
        <img className="landscape:xs:mb-5 landscape:sm:mb-5 landscape:md:mb-0 landscape:lg:mb-0 landscape:xl:mb-0 landscape:2xl:mb-0"
          src='/assets/img/linkedin-in-brands-solid.svg'
          alt='Logo LinkedIn'
          style={{ height: '8vh' }}
          onClick={handleClickLinkedin}
        />
        <img className="landscape:xs:my-5 landscape:sm:my-5 landscape:md:my-0 landscape:lg:my-0 landscape:xl:my-0 landscape:2xl:my-0"
          src='/assets/img/github-brands-solid.svg'
          alt='Logo Artstation'
          style={{ height: '8vh', filter: 'invert(1)' }}
          onClick={handleClickGithub}
        />
        <img className="landscape:xs:my-5 landscape:sm:my-5 landscape:md:my-0 landscape:lg:my-0 landscape:xl:my-0 landscape:2xl:my-0"
          src='/assets/img/instagram-brands-solid.svg'
          alt='Logo Instagram'
          style={{ height: '8vh', filter: ' invert(1)' }}
          onClick={handleClickInstagram}
        />
        <img className="landscape:xs:mt-5 landscape:sm:mt-5 landscape:md:mt-0 landscape:lg:mt-0 landscape:xl:mt-0 landscape:2xl:mt-0"
          src='/assets/img/artstation-brands-solid.svg'
          alt='Logo Artstation'
          style={{ height: '8vh', filter: 'white' }}
          onClick={handleClickArtstation}
        />
      </div>
      </div>
      <p className="text-xs text-white text-center mt-5 landscape:xs:mt-32 landscape:sm:mt-32 landscape:md:mt-32 landscape:lg:mt-10 landscape:xl:mt-10 landscape:2xl:mt-10">&copy; {year} Leo Ronnet. All rights reserved.</p>

    </div>
  )
}

export default Contact