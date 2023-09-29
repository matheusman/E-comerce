import React from 'react'
import pod from '../assets/pod.jpg'
import { NavLink } from 'react-router-dom'
import styles from './styles/_HomePageIndex.module.scss'

function HomePageIndex() {
  return (
    <main>
      <div className={`${styles.squareProduct} animeTop`}>
        <NavLink to={`/product/`}>
        <div className={styles.product}>
          <img src={pod}/>
          <p>Pod ignite sabor manga e sadasdioashdh saodha siodhoi sahd ioh dasiod</p>
          <div>
            <p className={styles.promocao}>R$ 104,52</p>
            <p>R$ 80,90</p>
          </div>
        </div>
        </NavLink>
        <NavLink to={`/product/`}>
        <div className={styles.product}>
          <img src={pod}/>
          <p>Pod ignite sabor manga e sadasdioashdh saodha siodhoi sahd ioh dasiod</p>
          <div>
            <p className={styles.promocao}>R$ 104,52</p>
            <p>R$ 80,90</p>
          </div>
        </div>
        </NavLink>
        <NavLink to={`/product/`}>
        <div className={styles.product}>
          <img src={pod}/>
          <p>Pod ignite sabor manga e sadasdioashdh saodha siodhoi sahd ioh dasiod</p>
          <div>
            <p className={styles.promocao}>R$ 104,52</p>
            <p>R$ 80,90</p>
          </div>
        </div>
        </NavLink>
        <NavLink to={`/product/`}>
        <div className={styles.product}>
          <img src={pod}/>
          <p>Pod ignite sabor manga e sadasdioashdh saodha siodhoi sahd ioh dasiod</p>
          <div>
            <p className={styles.promocao}>R$ 104,52</p>
            <p>R$ 80,90</p>
          </div>
        </div>
        </NavLink>
        <NavLink to={`/product/`}>
        <div className={styles.product}>
          <img src={pod}/>
          <p>Pod ignite sabor manga e sadasdioashdh saodha siodhoi sahd ioh dasiod</p>
          <div>
            <p className={styles.promocao}>R$ 104,52</p>
            <p>R$ 80,90</p>
          </div>
        </div>
        </NavLink>
        <NavLink to={`/product/`}>
        <div className={styles.product}>
          <img src={pod}/>
          <p>Pod ignite sabor manga e sadasdioashdh saodha siodhoi sahd ioh dasiod</p>
          <div>
            <p className={styles.promocao}>R$ 104,52</p>
            <p>R$ 80,90</p>
          </div>
        </div>
        </NavLink>
        <NavLink to={`/product/`}>
        <div className={styles.product}>
          <img src={pod}/>
          <p>Pod ignite sabor manga e sadasdioashdh saodha siodhoi sahd ioh dasiod</p>
          <div>
            <p className={styles.promocao}>R$ 104,52</p>
            <p>R$ 80,90</p>
          </div>
        </div>
        </NavLink>
        
      </div>
    </main>
  )
}

export default HomePageIndex