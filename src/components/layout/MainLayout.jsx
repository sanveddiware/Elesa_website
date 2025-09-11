import React from 'react'
import Navbar from '../sections/header/Navbar.jsx'
import Footer from '../sections/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import SplashCursor from '../UI/SplashCursor.jsx'
import { WavyBackgroundDemo } from '../UI/WavyBackgroundDemo.jsx'
import { WavyBackground } from "../UI/WavyBackground";
function MainLayout({children}) {
   

  return (
    <div className="flex flex-col min-h-screen">
      <WavyBackground/>
      <SplashCursor/>
      <Navbar />
       <main className="flex-grow pt-20">
      <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout;