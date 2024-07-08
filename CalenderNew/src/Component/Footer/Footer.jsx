import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function Footer() {
  return (
    <div className=' flex flex-col items-center h-[20vh] w-full bg-slate-300  p-10 font-bold '>
      <div className=' flex gap-4 text-2xl '>
      <FaInstagram />
      <FaFacebook />
      <FaYoutube />
      </div>
      <h1 className=' pt-6 '>Thank You...Visit Us Again</h1>
      
    </div>
  )
}

export default Footer