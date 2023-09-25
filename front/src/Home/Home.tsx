import React from 'react'
import { Routes, Route } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'
import HomePageIndex from './HomePageIndex'

function Home() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePageIndex />}/>
        </Routes>
      <Footer/>

    </div>
  )
}

export default Home