import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Chef = ({ chef }) => {
    const { chefPicture, chefName , yearsOfExperience, description, numberOfRecipes} = chef;
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
                <Button variant="primary">View recipes</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Chef;