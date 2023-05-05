import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { RiHeart2Line } from "react-icons/ri";
import './Recipe.css'

import RecipeCart from '../../RecipeCart/Recipecart';
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
                <p className='text-center'>About: {chef.description}</p >
               <h5 className='text-center text-primary'>I have {chef. numberOfRecipes} of Recipes</h5>
               <h6 className='text-center text-success'>I have {chef.yearsOfExperience} Years of Cooking Experience</h6>
               <hr />
               <h1 className='text-bold text-center mb-4'>My Popular Recipes</h1>
               <div className='recipe-container'>
               {chefRecipe.map((Recipe) => (<RecipeCart
               key={Recipe._id}
                Recipe={Recipe}
                ></RecipeCart>))
               }
               </div>
        </Container>
    );
};

export default Recipes;