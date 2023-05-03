import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'


const Login = () => {
    return (
       <Container className='mx-auto w-50 login-container'>
         <Form>
            <h2 className='text-center'>Login Your Account</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
       </Container>
    );
};

export default Login;