import React from 'react'
import './Featured.css'

import { products } from '../../Data/products'
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react'
import Loader from '../Loader';


export const Featured = () => {

    const featuredProducts = products.filter(product => product.featured);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 200));
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div id='featured' className="featured-products-section">
            <h1>Our Best Sellers</h1>
            <br />
            <div className="featured-products-grid">
                {featuredProducts.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className="product-item">
                        <img src={product.images[0]} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">₹{product.price}</p>
                    </Link>
                ))}
            </div>
            <br />
        </div>
    )
}

export default Featured