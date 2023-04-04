import React from 'react';
import './Phone.css'
import { Link } from 'react-router-dom';

const Phone = ({phone}) => {
    // console.log(phone);
    return (
        <div className='phone-container'>
            
            <h2>Name: {phone.name}</h2>
            <p>Phone: {phone.phone}</p>
            <p>Email: {phone.email}</p>
            <p><Link to={`/phone/${phone.id}`}>Show Details</Link></p>
        </div>
    );
};

export default Phone;