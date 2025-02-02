import React from 'react'
import Importance from './Importance'
import { Link, useNavigate } from 'react-router-dom'



function ImportanceCard({data}) {

    let navigate =useNavigate()
    function handleImp(){
        navigate("/comment",{state:data})
    }

  return (
    <div className=' w-full h-full text-center mt-4 flex flex-col justify-center items-center'>
        <h1 className=' font-bold text-xl text-red-600'>{data.monthName}</h1>
        <table className=' w-fit h-fit text-center border-2 border-red-600 border-separate bg-red-300 border border-green-800 '>
        <thead>
            <tr >
                <th className=' p-4 border border-green-800 '>ତାରିଖ</th>
                <th className=' p-4 border border-green-800'>ପର୍ବପର୍ବାଣୀ ଓ ଛୁଟିଦିନ</th>
                <th className=' p-4 border border-green-800'>ଦିନର ମହତ୍ତ୍ଵ</th>
            </tr>
        </thead>
        <tbody className=''>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date1}</td>
                <td className='border border-green-800'>{data.monthFestives.festive1}</td>
                <td className='border border-green-800 ' >
                {data.monthFestiveImp.imp1}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date2}</td>
                <td className='border border-green-800'>{data.monthFestives.festive2}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp2}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date3}</td>
                <td className='border border-green-800'>{data.monthFestives.festive3}</td>
                <td className='border border-green-800 underline text-blue-600 ' onClick={handleImp}>
                {data.monthFestiveImp.imp3}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date4}</td>
                <td className='border border-green-800'>{data.monthFestives.festive4}</td>
                <td className='border border-green-800 underline text-blue-600 ' onClick={handleImp}>
                {data.monthFestiveImp.imp4}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date5}</td>
                <td className='border border-green-800'>{data.monthFestives.festive5}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp5}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date6}</td>
                <td className='border border-green-800'>{data.monthFestives.festive6}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp6}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date7}</td>
                <td className='border border-green-800'>{data.monthFestives.festive7}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp7}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date8}</td>
                <td className='border border-green-800'>{data.monthFestives.festive8}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp8}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date9}</td>
                <td className='border border-green-800'>{data.monthFestives.festive9}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp9}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date10}</td>
                <td className='border border-green-800'>{data.monthFestives.festive10}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp10}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date11}</td>
                <td className='border border-green-800'>{data.monthFestives.festive11}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp11}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date12}</td>
                <td className='border border-green-800'>{data.monthFestives.festive12}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp12}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date13}</td>
                <td className='border border-green-800'>{data.monthFestives.festive13}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp13}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date14}</td>
                <td className='border border-green-800'>{data.monthFestives.festive14}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp14}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date15}</td>
                <td className='border border-green-800'>{data.monthFestives.festive15}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp15}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date16}</td>
                <td className='border border-green-800'>{data.monthFestives.festive16}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp16}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date17}</td>
                <td className='border border-green-800'>{data.monthFestives.festive17}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp17}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date18}</td>
                <td className='border border-green-800'>{data.monthFestives.festive18}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp18}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date19}</td>
                <td className='border border-green-800'>{data.monthFestives.festive19}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp19}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date20}</td>
                <td className='border border-green-800'>{data.monthFestives.festive20}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp20}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date21}</td>
                <td className='border border-green-800'>{data.monthFestives.festive21}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp21}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date22}</td>
                <td className='border border-green-800'>{data.monthFestives.festive22}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp22}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date23}</td>
                <td className='border border-green-800'>{data.monthFestives.festive23}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp23}</td>
            </tr>
            <tr>
                <td className='border border-green-800'>{data.monthDates.date24}</td>
                <td className='border border-green-800'>{data.monthFestives.festive24}</td>
                <td className='border border-green-800 '>
                {data.monthFestiveImp.imp24}</td>
            </tr>

            
        </tbody>
    </table>
    </div>
  )
}

export default ImportanceCard