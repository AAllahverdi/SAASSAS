import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

function MainRoot() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainRoot