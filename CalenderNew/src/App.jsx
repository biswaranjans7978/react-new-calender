import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
          
    </>
  )
}

export default App
