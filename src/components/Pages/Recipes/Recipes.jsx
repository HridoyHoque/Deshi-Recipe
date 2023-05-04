import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { RiHeart2Line } from "react-icons/ri";

const Recipes = () => {

    const chef = useLoaderData()
    const chefRecipe = chef.recipes;
    console.log(chef);
    return (
        <Container>
            <div className='text-center mt-3'>
                <Image width="250" height="250" src={chef.chefPicture} roundedCircle />
            </div>
            <div className='d-flex text-center align-items-center'>
                <h1 className='mt-2 mx-auto ps-5'>Name: {chef.chefName}</h1 >
                <span className='ps-5'><RiHeart2Line />
                </span> {chef.likes}
            </div>
                <h3 className='text-center'>About: {chef.description}</h3 >
               <h5 className='text-center text-primary'>I have {chef. numberOfRecipes} of Recipes</h5>
               <h6 className='text-center text-success'>I have {chef.yearsOfExperience} Years of Cooking Experience</h6>
               <hr />
        </Container>
    );
};

export default Recipes;