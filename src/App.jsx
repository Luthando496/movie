import { useState } from 'react'
import Home from './Pages/Home'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Details from './Pages/Details'
import TVDetails from './Pages/TVDetails'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/tv/show/:id" element={<TVDetails />} />
    </Routes>
    <Footer />
      
    </>
  )
}

export default App
