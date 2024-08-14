import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function Layout() {
  return (
    <div>
      <Navbar/>
      <div className='outletBackgroundChemImg'>
      <Outlet/>

      </div>
    </div>
  )
}

export default Layout
