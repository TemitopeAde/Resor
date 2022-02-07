import React from 'react';
import { Container } from 'reactstrap';
import '../index.css';



const Services = () => {
  return (
      <div className='section-1'>
        <Container
            style={{
                paddingTop: "4rem",
                paddingBottom: "5rem"
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "40px"
                }}
            >SERVICES</h1>
            <div className="flex-container">         
                <div className="flex-1">
                    <h2>Free Cocktail</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolor.</p>
                </div>
                <div className="flex-1">
                    <h2>Free Shutle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed?</p>
                </div>
                <div className="flex-1">
                    <h2>Strongest Beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum.</p>
                </div>
            </div>
        </Container>
      </div>
          
              
  )
};

export default Services;
