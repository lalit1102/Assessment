import React from 'react'
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import BookNow from './components/Booking-Form/BookNow'
import Dashboard from './pages/Dashboard/Dashboard'


const App = () => {
  return (
    <div>
       <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
       <Footer />
    </div>
  )
}

export default App
