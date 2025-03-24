import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Trainers from './components/Trainers/Trainers'
import Membership from './components/Membership/Membership'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Membership />
      <Footer />
    </div>
  )
}

export default App
