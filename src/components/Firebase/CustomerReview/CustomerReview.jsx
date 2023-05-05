import React from 'react';
import { Image } from 'react-bootstrap';

const CustomerReview = () => {
    return (
        <>
           <div className='d-flex justify-content-center'>
           <h1 className='text-info'>Our Customer Review</h1>
           </div>
           <div className='container-lg d-lg-flex'>
           <Image className='container-fluid' src="https://i.ibb.co/JtS1LnF/customer1.png" roundedCircle />
           <h5 className='mt-5 ps-3'>Deshi recipes are a diverse and flavorful cuisine of Bangladesh. With dishes such as biryani, dal, and fish curry, Deshi cuisine features a variety of spices, herbs, and unique cooking techniques that make it a must-try for any food lover.</h5>
           </div>
           <div className= 'text-end container'>
           <h6>Salena Akter</h6>
           <p>UI/UX Designe </p>
           </div>

        </>
    );
};

export default CustomerReview;