import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const NewsPage = () => {
    const news = useLoaderData();
    console.log(news)
    const { _id, title, image_url, details, category_id} = news;
    return (
        <div className='p-4 border border-3 rounded m-4'>
            <h5 className='text-center'>{title}</h5>
           <img src={image_url} className='img-fluid' alt="" />
   <h6 className='mt-3'>{details}</h6>
   <Link to={`/catagory/${category_id}`}><button className='btn btn-primary' ><BsFillArrowRightCircleFill/> All this category news </button></Link>
        </div>

    );
};

export default NewsPage; <h2>News Details comming soon</h2>