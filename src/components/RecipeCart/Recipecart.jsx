import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FcRating } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCart = ({ Recipe }) => {
    const { recipe_name, ingredients, cookingMethod, rating, recipe_image } = Recipe;
    const [isDisabled, setDisabled] = useState(false)

    const handleFavoriteRecipe = () => {
        setDisabled(true)
        toast.success('Added to Favorite List', {
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
    return (
        <div>
            <Card style={{ width: '18rem' , height: '95%' }}>
                <Card.Img variant="top" className='img-fluid' style={{ minWidth: "350px", minHeight: "241px",maxWidth: "350px", maxHeight: "241px" }} src={recipe_image}/>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                    <Card.Title className='flex-grow-1'>{recipe_name}</Card.Title>
                    <FcRating />
                   <span className='ps-2'> {rating}</span>
                    </div>
                    <hr />
                    <Card.Text style={{height: '25%'}}>
                       <span>Cooking Method: {cookingMethod}</span>
                    </Card.Text>
                    
                    <h2 className='mt-5'>ingredients</h2>
                   {
                    ingredients.map(i => <p> * {i}</p>)
                   }
                    <Button disabled={isDisabled} onClick={handleFavoriteRecipe} variant="primary">Favorite</Button>
                </Card.Body>
            </Card>
           
            <hr />
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

export default RecipeCart;