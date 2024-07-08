import React from 'react'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Header() {
  let [display, SetDisplay] = useState("hidden");
  let [menu, setMenu] = useState(1);
  return (
    <div className='navbar relative lg:h-14 bg-green-800 text-white flex gap-4 justify-between flex-col text-2xl font-bold lg:p-4 lg:flex-row  lg:items-center'>
        <div className="left p-4">
          <h1>Calender</h1>
        </div>

        <div className={`medium ${display}  flex flex-col  gap-2 font-normal lg:flex-row lg:block lg:flex lg:gap-4 lg:pr-4    text-center`}> 
          <Link to="/" className=' hover:bg-orange-400 rounded-md hover:font-semibold p-1 '>Home</Link>
          <Link to="/monthlyfestive" className=' hover:bg-orange-400  rounded-md hover:font-semibold p-1'>Festivals & Holiday</Link>
          <Link to="/contact" className=' hover:bg-orange-400 rounded-md hover:font-semibold p-1'>Contact</Link>
        </div>
        <div className='absolute right-3 lg:hidden'>
        {menu ? (
          <IoMenu 
          className={`   text-3xl
            font-semibold mt-4`}
                          onClick={() => {
                            setMenu(0);
                            SetDisplay("block");
                          }}
                        />
        ):
        (
          <RxCross2 className={`  text-3xl
            font-semibold mt-4 `}
                          onClick={() => {
                            setMenu(1);
                            SetDisplay("hidden");
                          }}
          />
        )
          
        }
        </div>

      </div>
  )
}

export default Header