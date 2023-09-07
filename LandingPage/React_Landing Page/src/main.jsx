import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Git from './Components/Github/Git'

const router = createBrowserRouter([{
  path: '/',
  element:<Layout />,
  children:[{
    path:'',
    element:<Home/>,
 },{
  path:'about',
  element:<About/>,
},
{
  path:'contact',
  element:<Contact/>,
},
{
  path:'user/:userid',
  element:<User/>,
},
{
  path:'github',
  element:<Git/>,
}
]
  
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>,
)
