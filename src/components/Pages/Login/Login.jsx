import React, { useContext, useState } from 'react';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { user, LoginUser, SignInWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState(null)

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('')
        LoginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                toast.success('Login Success', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch(error => {
                setError('please provide valid email and password')
            })
    }

    const handleGoogleSignIn = (event) => {
        SignInWithGoogle()
        .then(result => {
          const LoggedUser = result.user;
          console.log(LoggedUser)
          toast.success('Login Success', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <Container className='mx-auto w-50 login-container'>
            <Form onSubmit={handleSignIn}>
                <h2 className='text-center'>Login Your Account</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-danger'>{error}</p>

                <hr />
                <h5 className='text-center'>Login With</h5>
                <ListGroup className='ps-2'>
                    <Button onClick={handleGoogleSignIn} className='ps-2 mt-2'><FaGoogle></FaGoogle><span className='ps-2'>Google</span></Button>
                    <Button className='ps-2 mt-2'><FaGithub></FaGithub><span className='ps-2'>Github</span></Button>
                </ListGroup>
                <h6 className='text-center mt-2'>New to Deshi recipe? <Link to='/registration' className='text-primary text-decoration-none'>Register</Link></h6>
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
                theme="light"
            />
        </Container>
    );
};

export default Login;