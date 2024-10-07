import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

export const ImageCarousel = ({ images }) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...sliderSettings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={image} className="carousel-image" />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;
