import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/COmpo/Main';
import HOme from './assets/COmpo/HOme';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<HOme></HOme>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
