import React from 'react';
import { Carousel } from 'react-bootstrap';

import Img from '../Img/Img';

const ControlledCarousel = props => {
    const slideInterval = 5000;

    return (
        <Carousel interval={slideInterval}>
            <Carousel.Item>
                <Img
                    className="img-responsive img-full col-lg-12"
                    alt="Property feature"
                    src="/assets/carousel/02"
                    ext="jpg"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Img
                    className="img-responsive img-full col-lg-12"
                    alt="Property feature"
                    src="/assets/carousel/03"
                    ext="jpg"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Img
                    className="img-responsive img-full col-lg-12"
                    alt="Property feature"
                    src="/assets/carousel/04"
                    ext="jpg"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ControlledCarousel;
