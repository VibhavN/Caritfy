import React from 'react';
import './ProductCard.css'; 
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

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

export const ProductCard = ({ product }) => {
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
        <div className="product-card">
            <Slider {...sliderSettings}>
                {product.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`${product.name}-${index}`} className="product-image" />
                    </div>
                ))}
            </Slider>
            <div className="product-info">
                <h3>{product.name}</h3>
                <span>{product.description}</span>
                <p>₹{product.price}</p>
                <Link to={`/product/${product.id}`}><button>Buy now</button></Link>
            </div>
        </div>
    );
};

export default ProductCard;
