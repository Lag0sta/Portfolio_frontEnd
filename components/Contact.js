import styles from '../styles/Contact.module.css'

function Contact() {
    return(
        <div className={styles.mainContainer}>
            <h2>CONTACT</h2>
            <div className={styles.contact}>
                <input type='text' className={styles.email} placeholder='enter your @mail adress'/>
                <input type='text' className={styles.object} placeholder='write your query here'/>
                <input type='text' className={styles.msg} placeholder='write your msg here'/>
                <button>SEND</button>
            </div>
            

        </div>
    )
}

export default Contact()