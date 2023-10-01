import React from 'react'
import { Routes, Route } from 'react-router'
import Product from './Product'
import HomePageIndex from './HomePageIndex'
import LocationMap from './LocationMap'
import Carrinho from './Carrinho'
import EnderecoAdicionar from './EnderecoAdicionar'

function Home() {
  return (
    <div>
        <Routes>
          <Route path='/*' element={<HomePageIndex />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/location" element={<LocationMap />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/endereco/input" element={<EnderecoAdicionar />} />
        </Routes>

    </div>
  )
}

export default Home