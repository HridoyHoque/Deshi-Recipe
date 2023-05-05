import React, { useContext, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
            <Navbar className='navbar' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/' className='text-decoration-none fw-bold'> <span>Deshi</span> Recipe</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <NavLink to='/' activeclassname="active" className='text-decoration-none text-black'>Home</NavLink>
                            <NavLink to='/blog' activeclassname="active" className='text-decoration-none text-black'>Blog</NavLink>
                            <NavLink to='/registration' activeclassname="active" className='text-decoration-none text-black'>NewUser</NavLink>
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