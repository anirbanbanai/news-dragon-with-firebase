import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from './Main';
import HOme from './HOme';
import Catagory from './Catagory';
import NewsLayout from './NewsLayout';
import NewsPage from './News/NewsPage';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HOme></HOme>
            },
            {
                path: "/catagory/:id",
                element: <Catagory></Catagory>,
                loader:({params})=> fetch(`http://localhost:5000/catagory/${params.id}`)
            }

        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <NewsPage></NewsPage>
            }
        ]
    }
]);


