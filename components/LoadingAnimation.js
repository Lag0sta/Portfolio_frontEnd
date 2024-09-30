import styles from '../styles/LoadingAnimation.module.css';


function LoadingAnimation() {

  

  return (
    <div className={styles.mainContainer}>
      <div className={styles.txt}>
        <span>loading</span>
        <div className={styles.dots}>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
          <div className={styles.dot3}></div>
        </div>
      </div>



      <div className={styles.loadingBar}>
        <div className={styles.progress} style={{ 'width': '50%' }}></div>
      </div>
    </div>
  );
}

export default LoadingAnimation;