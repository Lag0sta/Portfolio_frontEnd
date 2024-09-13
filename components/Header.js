import styles from '../styles/Header.module.css'


function Header({handleScrollInfo}) {

  console.log({handleScrollInfo})

    return (
    <div className = {styles.header}>
      <nav className={styles.el}>
        <img src='/assets/img/logo.png' alt='logo'/>
        <nav className = {styles.btn}>
          <button onClick={()=>handleScrollInfo()}>Info</button> 
          <button>Portfolio</button>
          <button>Contact</button> 
        </nav>
     
      </nav> 
    </div>

    );
}

export default Header() ;
