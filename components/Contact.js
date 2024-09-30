import { useState } from 'react'

import emailjs from 'emailjs-com';

import styles from '../styles/Contact.module.css'

function Contact() {

  const [email, setEmail] = useState('')
  const [object, setObject] = useState('')
  const [message, setMessage] = useState('')

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
    <div className={styles.mainContainer}>
      <h2>CONTACT</h2>
      <div className={styles.contact}>
        <input
          type='text'
          className={styles.email}
          placeholder='enter your @mail adress'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='text'
          className={styles.object}
          placeholder='write your query here'
          onChange={(e) => setObject(e.target.value)}
          value={object}
        />
        <input
          type='text'
          className={styles.msg}
          placeholder='write your msg here'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button onClick={sendEmail}>SEND</button>
      </div>
      <div style={{
        padding: '15vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '5vh',
        paddingBottom: '3vh'
      }}>
        <img
          src='/assets/img/linkedin-in-brands-solid.svg'
          alt='Logo LinkedIn'
          style={{ height: '8vh' }}
          onClick={handleClickLinkedin}
        />
        <img
          src='/assets/img/github-brands-solid.svg'
          alt='Logo Artstation'
          style={{ height: '8vh', filter: 'invert(1)' }}
          onClick={handleClickGithub}
        />
        <img
          src='/assets/img/instagram-brands-solid.svg'
          alt='Logo Instagram'
          style={{ height: '8vh', filter: ' invert(1)' }}
          onClick={handleClickInstagram}
        />
        <img
          src='/assets/img/artstation-brands-solid.svg'
          alt='Logo Artstation'
          style={{ height: '8vh', filter: 'white' }}
          onClick={handleClickArtstation}
        />
      </div>
      <p style={{ color: 'white', textAlign: 'center'}}>&copy; {year} Leo Ronnet. All rights reserved.</p>

    </div>
  )
}

export default Contact