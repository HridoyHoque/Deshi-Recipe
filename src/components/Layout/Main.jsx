import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Navbar/Header';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
           <Header></Header>
           <div style={{ minHeight: 'calc(100vh - 136px)' }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;