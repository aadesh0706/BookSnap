import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './pages/Footer/Footer'

function Layout() {
  return (
    <div>
      <Navbar/>
      <div className='outletBackgroundChemImg'>
      <Outlet/>
      <Footer/>
      </div>
    </div>
  )
}

export default Layout
