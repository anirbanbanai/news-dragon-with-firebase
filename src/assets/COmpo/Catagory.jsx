import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './News/NewsCard';


const Catagory = () => {

    const { id } = useParams()

const catagoryNews = useLoaderData();
// console.log(catagoryNews)

    return (
        <div>
           { id && <h2>This catagori news :  {catagoryNews.length}</h2>}
            <div>
                {
                    catagoryNews.map(m => <NewsCard key={m._id} main={m}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Catagory;