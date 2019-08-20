import React from 'react';
import './item-card.scss';

const ItemCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="item-card-container">
      <img src={imageUrl} alt="item" className="image" />
      <div className="info-container">
        <span className="title">{title} </span>
        <span className="subtitle"> {subtitle}</span>
      </div>
    </div>
  );
};

export default ItemCard;
