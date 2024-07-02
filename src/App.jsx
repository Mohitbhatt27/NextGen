import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
import Services from './components/Services'
import Product from './components/Product'
import Footer from './components/Footer'
import Soap from './components/Soap'
import Juice from './components/Juice'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Card/>
      <Services/>
      <Product/>
      <Soap/>
      <Juice/>
      <Footer/>
    </div>
  )
}

export default App
