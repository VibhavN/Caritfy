import React from 'react'
import './Categories.css'
import gaming from '../Assets/gaming.jpg'
import laptop from '../Assets/laptops.jpg'
import watches from '../Assets/watches.jpg'
import speakers from '../Assets/speakers.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from '../Loader';

const categories = [
    { name: 'Laptops', image: laptop},
    { name: 'Gaming Consoles', image: gaming},
    { name: 'Watches', image: watches},
    { name: 'Speakers', image: speakers},
  ];

export const Categories = () => {

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
        <div className="categories-section">
            <h1>Shop by Categories</h1>
            <br />
            <div className="categories-grid">
                {categories.map((category) => (
                    <div className="category-card" 
                        style={{ backgroundImage: `url(${category.image})` }}
                        key={category.name}>
                        <Link to={`/category/${category.name}`}>
                            <div className="category-overlay">
                                <h3 className="category-name">{category.name}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
    </div>
    )
}

export default Categories
