import styles from '../styles/Header.module.css'

function Header({handleScrollInfo}) {

    return (
    <div className = {styles.header}>
      <div className={styles.el}>
        <img src='/assets/img/logo.png' alt='logo'/>
        <div className = {styles.btn}>
          <button onClick={()=>handleScrollInfo()}>Info</button> 
          <button>Portfolio</button>
          <button>Contact</button> 
        </div>
     
      </div> 
    </div>

    );
}

export default Header() ;
