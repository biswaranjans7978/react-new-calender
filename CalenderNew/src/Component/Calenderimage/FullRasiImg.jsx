import React from 'react'

function FullRasiImg() {
    let data= useLocation()
  return (
    <>
    <Link to="/">
    <div className=' h-fit w-full'>
      <img className=' h-fit w-full lg:pl-60 lg:pr-60 lg:pt-20' src={data.state} alt="" />
     
    </div>
    </Link>
    <Link><button>Full Screen</button></Link>
    </>
  )
}

export default FullRasiImg