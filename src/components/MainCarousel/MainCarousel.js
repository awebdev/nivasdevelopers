import React from 'react';
import Carousel from '../Carousel';

export const MainCarousel = () => (
    <div className="row">
        <div className="box">
            <div className="col-lg-12 text-center">
                <h2 className="brand-before">
                    <small>Welcome to</small>
                </h2>

                <h1 className="brand-name">Vaidehi Nivas Golden Palms</h1>
                <hr className="tagline-divider" />

                <h2>
                    <small>
                        By&nbsp;<strong>Nivas Developers</strong>
                    </small>
                </h2>

                <Carousel />
            </div>
        </div>
    </div>
);

export default MainCarousel;
