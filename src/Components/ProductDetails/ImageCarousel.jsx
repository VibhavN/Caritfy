import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-arrow next`} onClick={onClick}>
           <i className="fas fa-chevron-right"></i>
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-arrow prev`} onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </div>
    );
};

export const ImageCarousel = ({ product }) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: true,
    };

    return (
        <Slider {...sliderSettings}>
            {product.images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={image} className="carousel-image" />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;
