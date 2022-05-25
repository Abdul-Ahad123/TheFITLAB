import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

import slide1 from "../../images/carousel_img1.jpg"
import slide2 from "../../images/carousel_img2.jpg"
import slide3 from "../../images/carousel_img3.jpg"


const Slider = () =>{
    return (
        <div>
            <Carousel infiniteLoop autoPlay>
                <div className='imag'>
                    <img src={slide1} alt='img1'/>
                </div>
                <div className='imag'>
                    <img src={slide2} alt='img2'/>
                </div>
                <div className='imag'>
                    <img src={slide3} alt='img3'/>
                </div>
            </Carousel>
        </div>
        
    )
};

export default Slider;