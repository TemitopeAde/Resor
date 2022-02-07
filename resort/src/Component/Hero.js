import React from 'react';
import {CarouselIndicators, Carousel, CarouselControl, CarouselItem, CarouselCaption, Button} from 'reactstrap';


const Hero = () => {
  return (
      <div 
        style={{
            display: "flex",
            height: "60vh",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            color: "whitesmoke",
            textAlign: "center",
            lineHeight: "30px"
        }}
      >
        <div>
            <h1>Luxurious Rooms</h1>
            <div
                style={{
                    margin: "20px 0px"
                }}
            >Starting from <span>$</span>39</div>
            <Button 
                color='primary'
                size='lg'
            >
                Our Rooms
            </Button>
        </div>
      </div>
  )
};

export default Hero;
