import React from 'react';
import './item-card.scss';

const ItemCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="item-card-container">
      <img src={imageUrl} alt="item" className="image" />
      <div className="info-container">
        <span className="title adaptive-text">{title} </span>
        <span className="subtitle adaptive-text"> {subtitle}</span>
      </div>
    </div>
  );
};

export default ItemCard;
