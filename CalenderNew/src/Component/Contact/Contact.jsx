import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

let Contact =()=> {
  let navigate =useNavigate()
   let [formDetails, setFormDetails] = useState({
    uname:"",
    email:"",
    message:""
   })

   let handleChange =(e)=>{
    setFormDetails({...formDetails,[e.target.name]:e.target.value})
    console.log(e);
   }

   let handleSubmit= async (e)=>{
    navigate('/thankyou')
    e.preventDefault();
    const response = await fetch('http://localhost:8080/userdata',{
      method:'POST',
    body:JSON.stringify(formDetails),
    headers:{
      'Content-Type':'application/json'
    }
    })
    const data = await response.json();
  //console.log(formDetails);
  //console.log(response);
  console.log(data);
   }


  return (
    <>
    <div className='parent bg-indigo-900 pb-20'>
      <div className='child justify-center text-center lg:grid grid-flow-col lg:gap-4 relative top-10 flex flex-col items-center gap-4'>
        <div className=' h-48 w-80 lg:h-60 lg:w-60 bg-white flex flex-col items-center justify-center gap-2'>
        <IoLocationOutline className=' text-5xl text-sky-400'/>
        <h3 className=' font-bold'>OUR MAIN OFFICE</h3>
        <h2>Kapilaprasad,Old Town,BBSR</h2>
        </div>

        <div className='h-48 w-80 lg:h-60 lg:w-60  bg-white flex flex-col items-center justify-center gap-2'>
        <FaPhone className=' text-5xl text-sky-400' />
        <h3 className=' font-bold'>PHONE NUMBER</h3>
        <h2>+91 7978722396</h2>
        </div>

        <div className=' h-48 w-80 lg:h-60 lg:w-60  bg-white  gap-2 flex flex-col items-center justify-center  '>
          <div className='flex flex-col-2 '>
          <FaInstagram className=' text-5xl text-sky-400' />
          <FaFacebookSquare  className=' text-5xl text-sky-400'/>
          </div>
        <h3 className=' font-bold'>Follow us</h3>
        </div>

        <div className='h-48 w-80 lg:h-60 lg:w-60 bg-white flex flex-col items-center justify-center gap-2'>
        <MdOutlineMail className=' text-5xl text-sky-400' />
         <h3 className=' font-bold'>EMAIL</h3>
         <h2 className=' underline'><a href="/">calenderodia1@gmail.com</a></h2>
        </div>
      </div>

      <div className='contact  '>
      <div className=" lg:px-80">
        
        <div className="left w-full lg:w-full lg:h-screen bg-blue-300 flex flex-col  items-center px-8 py-4 lg:px-28 pt-20  ">
          <h1 className=" text-blue-900 text-5xl font-bold my-8 ">
          Contact Us
          </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="uname" className=" text-left w-full">
          Enter your name
          </label>
  
          <input
            type="text"
            id="uname " name="uname" required
            value={formDetails.uname} onChange={handleChange} 
            className=" w-full rounded-lg py-2 px-4 my-2  outline-red-500"
          />
  
          <label htmlFor="email" className=" w-full text-left">
         Enter your email
          </label>
  
          
          <input className="w-full  rounded-lg py-2 px-4 my-2  outline-red-500" name="email" id="email" value={formDetails.email} onChange={handleChange}  required/>

          <label className='w-full text-left' htmlFor="message">Type your message</label>
          <textarea className='w-full   rounded-lg py-2 px-4 my-2  outline-red-500' name="message" id="message" value={formDetails.message} onChange={handleChange} ></textarea>
  
          
         <button className=" w-32 bg-red-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  " >
         Submit
          </button>
        </form>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Contact