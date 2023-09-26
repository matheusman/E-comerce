import React from 'react'
import { Routes, Route } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'
import HomePageIndex from './HomePageIndex'

function Home() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePageIndex />}/>
        </Routes>

    </div>
  )
}

export default Home