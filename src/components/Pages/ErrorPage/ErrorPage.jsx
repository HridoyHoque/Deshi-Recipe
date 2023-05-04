import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container text-center'>
            <img className='text-center' src='https://i.ibb.co/cQn3BBR/404.png'></img>
            <h4>The Page you're Looking for is not available</h4>
            <Link to='/'><button className='btn btn-primary'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;