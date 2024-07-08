import React, { useState } from 'react'
import CalenderCard from './CalenderCard'
import author from "../../assets/photos/rasiphala.jpeg"



function CalenderImg() {

  let frontCards=[
    {
    
      monthName:"ଜାନୁଆରୀ",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-January-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"10.10",
      cardImg2:author,
      
    },
    {
      monthName:"ଫେବୃଆରୀ",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-February-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"12.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ମାର୍ଚ୍ଚ",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-March-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"16.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ଅପ୍ରେଲ",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ମଇ",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ଜୁନ",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ଜୁଲାଇ",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ଅଗଷ୍ଟ",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ସେପ୍ଟେମ୍ବର",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ଅକ୍ଟୋବର",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ନଭେମ୍ୱର",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    },
    {
      monthName:"ଡିସେମ୍ବର",
      cardImg:"https://www.nuaodisha.com/images/odia-calendar/Odia-Kohinoor-Calendar-April-Nua-Odisha.jpg",
      rasiphala:"ରାଶିଫଳ",
      time:"20.10"
      ,
      cardImg2:author,
    }, 
  ]
    
  let [data,setData]=useState(frontCards)
  console.log(data);
  return (
   <>
   
   <div className='  w-full pt- justify-center bg-orange-300 '>
    <div className=" h-20 font-extrabold text-xl text-white mb- bg-[url('https://www.shutterstock.com/image-vector/indian-tribal-painting-warli-260nw-2429804279.jpg')] ">
    <marquee behavior="" direction="">
      <div className=' flex pt-8 '>
        <img className=' h-10 rounded-full' src="https://i.pinimg.com/736x/77/4b/37/774b370129b868453451ae3085b1c13c.jpg" alt="" />
      <h2 className=' px-2'>ଓଡ଼ିଆ କ୍ୟାଲେଣ୍ଡର ୨୦୨୫</h2>
      <img className=' h-10 rounded-full' src="https://i.pinimg.com/736x/77/4b/37/774b370129b868453451ae3085b1c13c.jpg" alt="" />
      </div>
    </marquee>
    </div>
   <div className='front p-2  lg:grid lg:grid-cols-4 lg:gap-4 border-2'>
    {
      data.map((data)=>{

        return <CalenderCard data={data} />
      })
    }
   </div>
   </div>
   </>
  )
}

export default CalenderImg