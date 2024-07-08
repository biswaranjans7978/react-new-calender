
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Banner() {
    gsap.registerPlugin(useGSAP);
  
    useGSAP(() => {
      gsap.from("span", {
        opacity: 0,
        scale: 2,
       
        repeat: -1,
  
        duration: 2,
        stagger: 0.8,
        delay: 2,
      });
  
      gsap.from(".subtitle", {
        opacity: 0,
        scale: 1.8,
        // repeat: -1,
        duration: 2,
        stagger: 0.2,
        delay: 1,
        
      });
    });
  return (
    <div className="h-[30vh] lg:h-[40vh]  w-full flex flex-col justify-center items-center bg-[url('https://purijagannathadarshan.in/wp-content/uploads/2022/12/desk.jpg')] bg-no-repeat bg-cover bg-center ">
        <div id="heading" className="intro text-2xl lg:text-3xl  font-semibold text-white ">
            <span className=' inline-block'>ଓ</span>
            <span className='inline-block'>ଡ଼ି</span>
            <span className='inline-block'>ଆ</span>
            <span className='inline-block w-4'></span>
            <span className='inline-block '>କ୍ୟା</span>
            <span className='inline-block'>ଲେ</span>
            <span className='inline-block'>ଣ୍ଡ</span>
            <span className='inline-block'>ର</span>
            <span className='inline-block w-4'></span>
            <span className='inline-block'>୨</span>
            <span className='inline-block'>୦</span>
            <span className='inline-block'>୨</span>
            <span className='inline-block'>୫</span>
        </div>
        <div className="subtitle text-xl  font-medium lg:my-10 my-6 text-white sm:text-red-600 lg:text-white">
            Odia Calender 2025    
        </div>

    </div>
  )
}

export default Banner