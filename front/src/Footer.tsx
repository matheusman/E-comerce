import React from 'react'
import styles from './styles/Footer.module.css'
import wathzapp from './assets/whatsapp.png'
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
function Footer() {
  return (
    <footer className={styles.footer}>

      <nav className={styles.socialNav}>
        <img className={styles.social} src={wathzapp}/>
        <img className={styles.social} src={facebook}/>
        <img className={styles.social} src={instagram}/>
      </nav>
    </footer>
  )
}

export default Footer