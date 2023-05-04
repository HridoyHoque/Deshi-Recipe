import React, { useContext, useState } from 'react';
import { Button, Container, Image, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css'


const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogout = () => {
        LogOut()
            .then(() => {
                toast.success('LogOut Success', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

            )
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/' className='text-decoration-none fw-bold'> <span>Deshi</span> Recipe</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <Link to='/' className='text-decoration-none text-black'>Home</Link>
                            <Link to='/blog' className='text-decoration-none text-black'>Blog</Link>
                            <Link to='/registration' className='text-decoration-none text-black'>NewUser</Link>
                        </Nav>
                      {user && <Image title={user?.displayName} src={user?.photoURL} width="50" height="50" roundedCircle />}
                        {user ?
                            <Link to='/'><Button onClick={handleLogout} className='btn btn-danger'>Logout</Button></Link>
                            : <Link to='/login'><Button>Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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
        </div>
    );
};

export default Header;