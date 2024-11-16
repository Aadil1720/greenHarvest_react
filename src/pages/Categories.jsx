import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ onCategorySelect }) => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, imgSrc: 'images/cat-1.png', title: 'Vegetables', discount: 'Upto 45% off' },
    { id: 2, imgSrc: 'images/fruits-category.jpeg', title: 'Fruits', discount: 'Upto 45% off' },
    { id: 3, imgSrc: 'images/pulses-category.jpeg', title: 'Pulses', discount: 'Upto 45% off' },
    { id: 4, imgSrc: 'images/spice-category.jpeg', title: 'Spices', discount: 'Upto 45% off' },
  ];

  const handleShopNowClick = (category) => {
    onCategorySelect(category); // Update the state in App.jsx
    navigate('/product'); // Navigate to Product page
  };

  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        Product <span>Categories</span>
      </h1>
      <div className="slider">
        {categories.map((category) => (
          <div className="slide-box" key={category.id}>
            <img src={category.imgSrc} alt={category.title} style={{ maxWidth: '80%' }} />
            <h3>{category.title}</h3>
            <p>{category.discount}</p>
            <button
              className="btn"
              onClick={() => handleShopNowClick(category.title)} // Pass category title
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
