import React from 'react'
import styles from './styles/Sidenav.module.scss'
import { Link } from 'react-router-dom'
function Sidenav() {
  return (
    <nav className={styles.nav}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Pod</li>
          <li>Essencia</li>
          <li>Narguilhe</li>
          <li>Utencilios</li>
        </ul>
    </nav>
  )
}

export default Sidenav