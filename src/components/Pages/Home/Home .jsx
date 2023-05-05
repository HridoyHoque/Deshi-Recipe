import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Chef from '../../Chefs/Chef';
import './Home.css'
import Users from '../Users/Users';
import CustomerReview from '../../Firebase/CustomerReview/CustomerReview';

const Home = () => {
    const [chefs, setChefs] = useState(null)
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);
    
        const handleResize = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleResize);
    
        return () => mediaQuery.removeEventListener('change', handleResize);
      }, []);

    useEffect(() => {
        fetch('https://deshi-recipe-server-hridoyhoque.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
          <Banner></Banner>
          <h2 className='text-bold text-center mb-4 mt-3'>Our Best Chefs</h2>

         <div className={isMobile ? 'container-sm' : 'container-lg cart-container'}>
         {
         chefs && chefs.map(chef => (
            <Chef
            key={chef.id}
            chef={chef}
            ></Chef>
         ))
          }
         </div>
         <Users></Users>
         <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home ;