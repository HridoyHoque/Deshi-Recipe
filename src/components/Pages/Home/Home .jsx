import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Chef from '../../Chefs/Chef';
import './Home.css'

const Home = () => {
    const [chefs, setChefs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
          <Banner></Banner>
          <h4 className='text-center'>Our Chefs</h4>

         <div className='container cart-container'>
         {
         chefs && chefs.map(chef => (
            <Chef
            key={chef.id}
            chef={chef}
            ></Chef>
         ))
          }
         </div>
        </div>
    );
};

export default Home ;