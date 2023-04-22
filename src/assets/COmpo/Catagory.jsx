import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const Catagory = () => {

    const { id } = useParams()

const catagoryNews = useLoaderData();
// console.log(catagoryNews)

    return (
        <div>
            <h2>This catagori news : {catagoryNews.length}</h2>
            <div>
                
            </div>
        </div>
    );
};

export default Catagory;