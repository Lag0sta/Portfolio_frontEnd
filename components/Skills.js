import styles from '../styles/Skills.module.css'

function Skills(){
    const skillsArr = [{ name: 'HTML', level: '80%' },
                       { name: 'CSS', level: '80%' },
                       { name: 'javaScript', level: '80%' }, 
                       { name: 'illustrator', level: '90%' }, 
                       { name: 'photoShop', level: '90%' }, 
                       { name: 'afterEffects', level: '80%' }, 
                       { name: 'premierPro', level: '70%'}, 
                       {name: 'cine4D', level : '60%' }
                      ]

    const skills = skillsArr.map((data, i) => {
        return(
            <div key={i} className={styles.skill}>
                <span style={{color: 'white', backgroundColor: 'black', border: 'solid white', padding: '10px', borderRadius: '5px'}}>{data.name}</span>
                <div style={{paddingRight: '10vh', backgroundColor: 'black'}}></div>
            </div>

        )

    }
    )
    return (
        <div className={styles.mainContainer}>
            {skills}
        </div>
    )
}

export default Skills()