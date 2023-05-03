import React from 'react';
import './Registrations.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Registration = () => {
    return (
     
             <Container className='mx-auto w-50 register-container'>
         <Form>
            <h2 className='text-center'>Register your account</h2>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" placeholder="Enter photo Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <hr />
        <h6 className='mt-2 text-center'>Already have an Account?<Link to='/login' className='text-primary text-decoration-none'> Login</Link></h6>
      </Form>
      
       </Container>
       
    );
};

export default Registration;