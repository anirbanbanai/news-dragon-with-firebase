import React from 'react';
import Q1 from '../../../assets/qZone1.png'
import Q2 from '../../../assets/qZone2.png'
import Q3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary mt-3 p-2'>
           <h2 className='text-white'>QZone</h2> 
           <img className='img-fluid' src={Q1} alt="" />
           <img className='img-fluid' src={Q2} alt="" />
           <img className='img-fluid' src={Q3} alt="" />
        </div>
    );
};

export default QZone;<h2>QZone</h2>