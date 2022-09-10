import React from 'react'

import { Carousel} from 'react-bootstrap';
const HeroSlides = () => {
     
      return (
        <Carousel className="hero-slide">
        <Carousel.Item >
          <img
            className="d-block "
            src = {require('../assets/Img/slidenew1.webp')}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block "
            src = {require('../assets/Img/slidenew2.webp')}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src = {require('../assets/Img/slide3new.webp')}
            alt="Third slide"
          />
        
        </Carousel.Item>
        </Carousel>
      )
 
}

export default HeroSlides