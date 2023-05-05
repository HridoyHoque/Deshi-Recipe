import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='rounded-lg container-lg'>
            <Carousel>
      <Carousel.Item interval={1000}>
        <img
         style={{height: "550px"}}
          className="d-block w-100 object-cover "
          src="https://i.ibb.co/WFwwVXw/pexels-armin-rimoldi-5553620.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <h1>Pizza is a beloved dish that has become popular all over the world.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{height: "550px"}}
          className="d-block w-100 object-cover "
          src="https://i.ibb.co/0jc9wnm/pexels-mumtahina-tanni-6260921.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
       
   <h1>Pizza is a beloved dish that has become popular all over the world.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height: "550px"}}
          className="d-block w-100 object-cover "
          src="https://i.ibb.co/rHRpsNN/pexels-roman-odintsov-4551832.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>The flavor of steak can vary depending on the cut, preparation, and seasoning.
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;