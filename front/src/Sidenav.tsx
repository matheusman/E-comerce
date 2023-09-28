import React from 'react'
import styles from './styles/Sidenav.module.scss'
function Sidenav() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li className="content">Home</li>
            <li className="content">Pod</li>
            <li className="content">Essencia</li>
            <li className="content">Narguilhe</li>
            <li className="content">Utencilios</li>            
        </ul>
    </nav>
  )
}

export default Sidenav