// Card.js

import React from 'react';
import './Cards.css';

const Cards = ({ title, description, imageUrl }) => {
    console.log(imageUrl)
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
