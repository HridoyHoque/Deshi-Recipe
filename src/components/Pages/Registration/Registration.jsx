import React, { useContext, useState } from 'react';
import './Registrations.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';

const Registration = () => {

    const {user, SignUpUser} = useContext(AuthContext);
    const [error, setError] = useState(null)

    const handleSignUp = (event) => {
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       const name = form.name.value;
       const photoURL = form.photoURL.value;

       console.log(name, email, password, photoURL,)
       setError('')

       if(password.length < 6){
        setError('Your password must be at least 6 characters')
        return;
       }
       if(password.length === 0 || name.length === 0 || photoURL.length === 0 || email.length === 0){
        setError('Please fill the form with your information')
        return;
       }
       SignUpUser(email , password)
       .then(result => {
        const CreatedUser = result.user;
        console.log(CreatedUser)
        form.reset()
        toast.success('Account Created Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            updateUserData(result.user, name, photoURL);
       })
       .catch(error => {
        console.log(error)
       })
    }

    const updateUserData = (user, name, photoURL) => {
      updateProfile(user,{
        displayName: name, photoURL: photoURL
      })
      .then(() => {
        console.log('user updated successfully')
      })
      .catch(error => {
        console.log(error)
      })
    }
    return (
     
             <Container className='mx-auto w-50 register-container'>
         <Form onSubmit={handleSignUp}>
            <h2 className='text-center'>Register your account</h2>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="Enter photo Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p className='text-danger'>{error}</p>
        <hr />
        <h6 className='mt-2 text-center'>Already have an Account?<Link to='/login' className='text-primary text-decoration-none'> Login</Link></h6>
      </Form>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
       </Container>
       
    );
};

export default Registration;