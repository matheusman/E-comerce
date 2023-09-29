import React from 'react'
import styles from './styles/Sidenav.module.scss'
function Sidenav() {
  return (
    <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Pod</li>
          <li>Essencia</li>
          <li>Narguilhe</li>
          <li>Utencilios</li>
        </ul>
    </nav>
  )
}

export default Sidenav