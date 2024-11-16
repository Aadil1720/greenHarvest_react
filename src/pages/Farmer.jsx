import React from 'react';

// Sample data for farmers
const farmers = [
  {
    id: 1,
    imgSrc: 'images/farmer4.jpeg',
    name: 'Anita Devi',
    role: 'Farmer Trainer | 3 Year Experience',
    social: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
  },
  {
    id: 2,
    imgSrc: 'images/farmer2.jpeg',
    name: 'Bhagwan Singh',
    role: 'Traditional Palm-Date Farming | 30 Year Experience',
    social: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
  },
  {
    id: 3,
    imgSrc: 'images/farmer-4.jpg',
    name: 'Muhammad Iqbal',
    role: 'Cotton Farming | 20 Year Experience',
    social: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
  },
  {
    id: 4,
    imgSrc: 'images/farmer1.jpeg',
    name: 'Suresh Chauhan',
    role: 'Agriculture Entrepreneurship | 8 Year Experience',
    social: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
  },
];


const Farmer = () => {
  return (
    <section className="top" id="top">
      <div className="conc">
        <h1 className="heading">
          our <span> Farmers</span>
        </h1>
      </div>

      <div className="wrap">
        {farmers.map((farmer) => (
          <div className="container" key={farmer.id}>
            <div className="img-wrapper">
              <img src={farmer.imgSrc} alt={farmer.name} />
            </div>
            <div className="details">
              <h3>{farmer.name}</h3>
              <h5>{farmer.role}</h5>
              <div className="social-icons">
                {farmer.social.map((icon, index) => (
                  <i key={index} className={`fa ${icon}`}></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Farmer;
 
