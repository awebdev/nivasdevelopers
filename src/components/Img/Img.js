import React from 'react';

const Img = props => (
    <picture>
        <source type="image/webp" srcSet={`${props.src}.webp`} />
        <source type="image/jpeg" srcSet={`${props.src}.jpg`} />
        <img
            alt=""
            loading="lazy"
            {...props}
            src={`${props.src}.${props.ext}`}
        />
    </picture>
);

export default Img;
