import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {

    const chef = useLoaderData()
    const chefRecipe = chef.recipes;
    console.log(chef);
    return (
        <Container>
            
        </Container>
    );
};

export default Recipes;