import React from 'react';
import { products } from '../Data/products';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/Categories/ProductCard';
import './CategoriesPage.css'; 

export const CategoriesPage = () => {
  const { categoryName } = useParams();

  const categoryProducts = products.filter(
    product => product.category === categoryName
  );

  return (
    <div className="category-page">
      <h1>Shop for {categoryName}</h1>
      <div className="product-grid">
        {categoryProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
