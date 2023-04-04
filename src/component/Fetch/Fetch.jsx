import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from '../Phone/Phone';

const Fetch = () => {
    const phones = useLoaderData();
    // console.log(phones)
    return (
        <div>
            <h2>Number of Phones: {phones.length}</h2>
            <div className='grid grid-cols-3'>
                {
                    phones.map((phone, index)=><Phone key={index} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Fetch;