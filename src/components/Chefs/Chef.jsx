import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const {id, chefPicture, chefName , yearsOfExperience, description, numberOfRecipes} = chef;
    return (
        <div className='mb-2'> 
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={chefPicture} />
            <Card.Body>
                <div className='d-flex'><Card.Title className='me-auto'>{chefName}</Card.Title></div>
                <h5 className='text-success'>{yearsOfExperience} Years of Experience</h5>
                <Card.Text>
                    {description}
                </Card.Text>
                <p >Recipe items: {numberOfRecipes}</p>
                <Link to={`/chefs/${id}`}><Button variant="primary">View recipes</Button></Link>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Chef;