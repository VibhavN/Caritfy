import React from 'react';
import './PromoBanner.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import saleBanner1 from '../Assets/banner1.jpg';
import saleBanner2 from '../Assets/banner2.jpg';

export const PromoBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const scrollToFeatured = () => {
        const featuredSection = document.getElementById('featured');
        if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='promo-banner'>
            <Slider {...settings}>
                <div className="slide">
                    <div className="promo-content" style={{ backgroundImage: `url(${saleBanner1})` }}>
                        <h2>Biggest Sale of the Year</h2>
                        <p>Upto 50% off on selected items!!</p>
                        <button className='promo-btn' onClick={scrollToFeatured}>SHOP NOW</button>
                    </div>
                </div>
                <div className="slide">
                    <div className="promo-content" style={{ backgroundImage: `url(${saleBanner2})` }}>
                        <h2>New Arrivals</h2>
                        <p>Discover the latest trends for this season!</p>
                        <button className='promo-btn' onClick={scrollToFeatured}>EXPLORE</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default PromoBanner;
