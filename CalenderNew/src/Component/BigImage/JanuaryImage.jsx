import React from 'react'
import { Link } from 'react-router-dom'

function JanuaryImage() {
  return (
    <div className=' lg:h-full lg:w-full lg:px-48'>
       <Link to="/"> <img className=' lg:h-fit lg:w-10/12 lg:px-32 lg:py-10' src="https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-January-Nua-Odisha.jpg" alt="" /></Link>
    </div>
  )
}

export default JanuaryImage