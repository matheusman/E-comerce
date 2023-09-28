import React from 'react'
import pod from '../assets/pod.jpg'
import styles from './styles/HomePageIndex.module.css'

function HomePageIndex() {
  return (
    <main>
      <div className={styles.squareProduct}>
        <div className={styles.product}>
          <img className={styles.productImg} src={pod}/>
        </div>
      </div>
    </main>
  )
}

export default HomePageIndex