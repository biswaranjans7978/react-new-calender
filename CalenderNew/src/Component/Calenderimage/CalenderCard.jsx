
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Link, useNavigate } from 'react-router-dom';




function CalenderCard({ data,setData,data2}) {
  let navigate = useNavigate();
  function handleCalenderCard(){
    navigate("/fullImg",{state:data})

    if(isCalender){
      navigate("/fullImg",{state:data.cardImg})

    }
    else{
      navigate("/fullImg",{state:data.cardImg2})

    }
  }

   
  const [isFlipped, setIsFlipped] = useState(true);
  function flipCard() {

    setIsFlipped(!isFlipped);
  }

  function handleRasiphala(){

    flipCard()
    

    if(isCalender){
      setisCalender(false)
      setImg(data.cardImg2)
    }
    else{
      setisCalender(true)
      setImg(data.cardImg)
    }
  }

  

  let [img,setImg]=useState(data.cardImg)
  let [isCalender,setisCalender]=useState(true)
 
  return (


    <div className=' w-full '>
      
        <div className='card  border-2 rounded ' >
          <img onClick={handleCalenderCard}  className='front  w-full h-96 ' src={img} alt="" />
          <div>
            <div className='flex gap-5 text-2xl justify-center bg-amber-300 text-blue-900 font-bold'>
              <h1 className='  '>{data.monthName}</h1>
              <Link  className=' pl-1 ' onClick={handleRasiphala}>{
                isCalender ? "ରାଶିଫଳ" : "calender"
              }</Link>
              
            </div>

          </div>
        </div>
    </div>
  )
}

export default CalenderCard