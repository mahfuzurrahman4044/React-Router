import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body}=post;

    const navigate=useNavigate();
    const handleButtonDetails=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div>
            <p>Id: {id}</p>
            <h2>Title: {title}</h2>
            <h2>Body: {body}</h2>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button>Details</button></Link>
            <button onClick={handleButtonDetails}>Details</button>
        </div>
    );
};

export default Post;