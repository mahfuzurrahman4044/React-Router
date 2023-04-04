import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    const {id, title, useId, body}=post;

    const navigate=useNavigate();
    const handleBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Post Details</h2>
            <h5>Id: {id}</h5>
            <h2>{body}</h2>
            <h5>Title: {title}</h5>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default PostDetails;<h2>Post Details</h2>