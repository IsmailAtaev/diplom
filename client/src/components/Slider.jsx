import React from 'react';
import {CardImg, Carousel, CarouselItem} from "react-bootstrap";
import Egypt from '../assets/Egypt.jpg'
import istanbul from '../assets/Istanbul4.jpg'
import maldives from '../assets/Switzerland.png'
import dubay from "../assets/dubaiPool1.png";

const Slider = () => {
    return (<>
            <Carousel>
                <CarouselItem style={{'height': '600px'}}>
                    <CardImg className="d-block" src={Egypt} alt="First slider"/>
                    <Carousel.Caption>
                        <h3>Egypt</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem style={{'height': '600px'}}>
                    <CardImg className="d-block" src={dubay} alt="First slider"/>
                    <Carousel.Caption>
                        <h3>Turkish</h3>
                        <p>A Thousand and One Nights</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem style={{'height': '600px'}}>
                    <CardImg className="d-block" src={maldives} alt="First slider"/>
                    <Carousel.Caption>
                        <h3>Web Developer Blag</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </>);
};

export default Slider;