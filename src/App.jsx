import { useState } from 'react'
import Home from './Pages/Home'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Details from './Pages/Details'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
    <Footer />
      
    </>
  )
}

export default App
