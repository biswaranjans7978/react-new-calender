import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'

import Contact from './Component/Contact/Contact.jsx'
import CalenderCard from './Component/Calenderimage/CalenderCard.jsx'
import CalenderImg from './Component/Calenderimage/CalenderImg.jsx'
import FullImg from './Component/Calenderimage/FullImg.jsx'
import FullRasiImg from './Component/Calenderimage/FullRasiImg.jsx'
import Festives from './Component/MonthlyFestive/Festives.jsx'
import Importance from './Component/FestiveImportance/Importance.jsx'
import Comment from './Component/YourComment/Comment.jsx'
import ThankYou from './Component/ThankYou.jsx'



let routes =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/calendercard",
        element:<CalenderCard/>
      },
      {
        path:"/calenderimg",
        element:<CalenderImg/>
      },
      {
        path:"/fullImg",
      element:<FullImg/>
      },
      {
        path:"/fullRasiImg",
      element:<FullRasiImg/>
      },
      {
        path:"/monthlyfestive",
        element:<Festives/>
      },
      {
        path:"/importance",
        element:<Importance/>
      },
      {
        path:"/comment",
        element:<Comment/>
      },
      {
        path:"/thankyou",
        element:<ThankYou/>
      }
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>

    </RouterProvider>
  </React.StrictMode>,
)
