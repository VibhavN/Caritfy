import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Data/products';
import ImageCarousel from '../Components/ProductDetails/ImageCarousel';
import './ProductPage.css';
import { Link } from 'react-router-dom';

export const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-carousel">
          <ImageCarousel key={product.id} product={product} />
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <span className='product-rating'>{product.rating}</span>
          <p className="product-item-price">Price: ₹{product.price}</p>
          <Link to='/cart'><button className="add-to-cart-button">Add to Cart</button></Link>
        </div>
      </div>
    </div>


  );
};

export default ProductPage;
