import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [use, setUse] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setUse(data))
        .catch(error=> console.error(error))
    },[])
    return (
        <div className=''>
            <h2>Left Nav</h2>
            <div className='mt-4 text-start'>
                {
                    use.map(m=><h4 className='mt-4'>
                        <Link className='text-decoration-none'>{m.name}</Link>
                    </h4>)
                }
            </div>
        </div>
    );
};

export default LeftNav;<h2>Left Nav</h2>