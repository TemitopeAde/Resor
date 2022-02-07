import React from 'react';
import { Container, Button } from 'reactstrap';
import '../index.css';



const FeaturedRooms = () => {
  return (
          <Container
            style={{
                marginTop: "50px",
                marginBottom: "50px"
            }}
          >
            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "40px"
                }}
            >Featured Rooms</h1>
            <div className="flex-container">         
                <div className="flex-1">
                    <div className='flex-box'>
                        <div className='abs-1'>$550 <br />per Night</div>
                        <img 
                        src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSCo-31ziv39ojQBP2FDIMD2giQb3L4SsUv7tLuqARsvjzjU2krYaNo0DeZDaxkeeMVsI91HDObcbxB2__3SF0" 
                        alt="house" />
                        <div className='abs-2'>Family Deluxe</div>
                        <div className='abs-3'>
                            <a href="/">
                                <Button
                                    size='lg'
                                >
                                    FEATURES
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className='flex-box'>
                        <div className='abs-1'>$550 <br />per Night</div>
                        <img 
                            src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQY802uX9pE4PfAb1SVQAjLIlXBORII7T2bWlZFB8NoGUVhOjw2CyXYMDqTdDhsoOFv2s7CZnxa2Lsu3lkKFic" 
                            alt="house" />
                        <div className='abs-2'>Double Deluxe</div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className='flex-box'>
                        <div className='abs-1'>$550 <br />per Night</div>
                        <img 
                            src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcROvbQUnOw1ZmEAL9jUr1SHgBXUt75YFX7eigtNicJY2OoXCYy9ArtMzOWfHsjNwzgYtJlpwOo6xLFmuCMpZbg'
                            alt='house' />
                        <div className='abs-2'>Single Deluxe</div>
                    </div>
                </div>
            </div>
          </Container>
              
  )
};

export default FeaturedRooms;
