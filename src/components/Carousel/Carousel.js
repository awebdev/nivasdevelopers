import React from 'react';
import { Carousel } from 'react-bootstrap';

const assets = [
    '/assets/carousel/02.jpg',
    '/assets/carousel/03.jpg',
    '/assets/carousel/04.jpg'
];

const ControlledCarousel = props => {
    const slideInterval = 5000;

    return (
        <Carousel interval={slideInterval}>
            <Carousel.Item>
                <img
                    className="img-responsive img-full col-lg-12"
                    alt="Property feature"
                    src={assets[0]}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-responsive img-full col-lg-12"
                    alt="Property feature"
                    src={assets[1]}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-responsive img-full col-lg-12"
                    alt="Property feature"
                    src={assets[2]}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ControlledCarousel;
