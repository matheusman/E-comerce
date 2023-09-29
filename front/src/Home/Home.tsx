import React from 'react'
import { Routes, Route } from 'react-router'
import Product from './Product'
import HomePageIndex from './HomePageIndex'

function Home() {
  return (
    <div>
        <Routes>
          <Route path='/*' element={<HomePageIndex />}/>
          <Route path="/product" element={<Product />}/>
        </Routes>

    </div>
  )
}

export default Home