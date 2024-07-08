// import React, { useContext } from "react";
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { Link, useLocation, useNavigate } from "react-router-dom";



// function Comment () {
  
   
//   let navigate =useNavigate()
//   function handleImp2(){
//       navigate("/importance")
//   }
//   return (
//     <>
//     <div className=" text-2xl absolute pt-4 pl-2"><Link to="/importance"><IoMdArrowRoundBack /></Link></div>
//     <div className=" lg:px-64 ">
        
//       <div className="left w-full lg:w-full lg:h-screen bg-white flex flex-col  items-center px-8 py-4 lg:px-40 ">
//         <h1 className=" text-black text-2xl font-bold my-8 ">
//         ଆପଣଙ୍କ ମତାମତ
//         </h1>

//         <label htmlFor="" className=" text-left w-full">
//           Enter Your Name
//         </label>

//         <input type="text" className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"/>

//         <label htmlFor="" className=" text-left w-full">
//           Enter Your Mobile Number
//         </label>

//         <input type="text" className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"/>

//         <label htmlFor="" className=" text-left w-full">
//         ପର୍ବପର୍ବାଣୀ ଓ ଛୁଟିଦିନର ନାମ
//         </label>

//         <input
//           type="text"
//           id=" " required
//           placeholder=""
//           className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
//         />

//         <label htmlFor="" className=" w-full text-left">
//         ଆପଣ ଏହା ବିଷୟରେ କ'ଣ ଜାଣିଛନ୍ତି
//         </label>

        
//         <textarea className="w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500" name="" id="" required></textarea>

        
//       <button className=" w-full bg-red-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  " onClick={handleImp2}>
//       Submit
//         </button>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Comment;



import React, {useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, Navigate } from "react-router-dom";
import SuccessPopup from "./SuccessPopup";
import { useNavigate } from "react-router-dom";




let Comment =()=> {

   let [formData, setFormData]= useState({
    name:"",
    mobile:"",
    holiday:"",
    details:""
   })
  let handleChange= (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(e)
  }
  let navigate =useNavigate()
  let handleSubmit=async (e)=>{
    navigate('/thankyou')
   e.preventDefault();
 const response = await fetch('http://localhost:8080/demo',{
    method:'POST',
    body:JSON.stringify(formData),
    headers:{
      'Content-Type':'application/json'
    }
  })
  const data = await response.json();
  //console.log(formData);
  //console.log(response);
  console.log(data);

 }
  
  return (
    <>
    <div className=" text-2xl absolute pt-4 pl-2"><Link to="/importance"><IoMdArrowRoundBack /></Link></div>
    <div className=" lg:px-64 ">
        
      <div className="left w-full lg:w-full lg:h-screen bg-white flex flex-col  items-center px-8 py-4 lg:px-40 ">
        <h1 className=" text-black text-2xl font-bold my-8 ">
        ଆପଣଙ୍କ ମତାମତ
        </h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name" className=" text-left w-full">
          Enter Your Name
        </label>

        <input type="text" name="name" id="name" value={formData.name} autoComplete="on"   onChange={handleChange} className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"/>

        <label htmlFor="mobile" className=" text-left w-full">
          Enter Your Mobile Number
        </label>

        <input type="text" name="mobile" id="mobile" value={formData.mobile} autoComplete="on"  onChange={handleChange} className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"/>

        <label htmlFor="holiday" className=" text-left w-full">
        ପର୍ବପର୍ବାଣୀ ଓ ଛୁଟିଦିନର ନାମ
        </label>

        <input
          type="text"
          name="holiday" id="holiday" value={formData.holiday} autoComplete="on"  onChange={handleChange}
          placeholder=""
          className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <label htmlFor="details" className=" w-full text-left">
        ଆପଣ ଏହା ବିଷୟରେ କ'ଣ ଜାଣିଛନ୍ତି
        </label>

        
        <textarea name="details" id="details" value={formData.details} autoComplete="on"  onChange={handleChange} className="w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500" required></textarea>

        
      <button type="submit" className=" w-full bg-red-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  " >
      Submit
        </button>
        
        </form>
      </div>
    </div>
    </>
  );
}

export default Comment;