import React from 'react';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';


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
        
        <hr />
       <h5 className='text-center'>Login With</h5>
       <ListGroup className='ps-2'>
        <Button className='ps-2 mt-2'><FaGoogle></FaGoogle><span className='ps-2'>Google</span></Button>
        <Button className='ps-2 mt-2'><FaGithub></FaGithub><span className='ps-2'>Github</span></Button>
                </ListGroup>
                <h6 className='text-center mt-2'>New to Deshi recipe? <Link to='/registration' className='text-primary text-decoration-none'>Register</Link></h6>
      </Form>
      
       </Container>
    );
};

export default Login;