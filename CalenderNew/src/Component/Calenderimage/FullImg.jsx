import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


function FullImg() {

    let data= useLocation()
  return (
    <>
    <Link to="/">
    <div className=' h-fit w-full'>
      <img className=' h-fit w-full lg:pl-60 lg:pr-60 lg:pt-20' src={data.state.cardImg} alt="" />

    </div>
    </Link>
    </>
    
  )
}

export default FullImg