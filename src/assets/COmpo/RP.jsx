import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from './Main';
import HOme from './HOme';
import Catagory from './Catagory';
import NewsLayout from './NewsLayout';
import NewsPage from './News/NewsPage';
import { Login } from './Login';
// import Login from './Login';
// import EdiotorInside from './EdiotorInside';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Catagory></Catagory>,
                loader: ()=>fetch(`http://localhost:5000/news`)
            },
            {
                path: "/catagory/:id",
                element: <Catagory></Catagory>,
                loader:({params})=> fetch(`http://localhost:5000/catagory/${params.id}`)
            },
           
        //    {
        //     path:'/ed',
        //     element:<EdiotorInside></EdiotorInside>
        //    }

        ],
        
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <NewsPage></NewsPage>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);


