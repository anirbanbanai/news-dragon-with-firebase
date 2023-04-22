import React, { useEffect, useState } from 'react';

const Nav = () => {
    const [data, setDsata] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res=>res.json())
        .then(data => setDsata(data))
    },[])
    return (
        <div>
         <h2>Nav</h2>   
        </div>
    );
};

export default Nav;