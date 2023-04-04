import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {
    const phone=useLoaderData();
    console.log(phone);
    return (
        <div>
            <h4>Name: {phone.name}</h4>
            <p>Phone: {phone.phone}</p>
            <p>Email: {phone.email}</p>
        </div>
    );
};

export default PhoneDetails;