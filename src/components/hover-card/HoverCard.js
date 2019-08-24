import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import './hover-card.scss';

const HoverCard = ({ showCard, displayName, email }) => {
  return (
    <div className="hover-card-container">
      <Card
        className="hover-card"
        style={{
          opacity: showCard ? '1' : '0',
          zIndex: showCard ? '100' : '-100'
        }}
      >
        <div>{displayName}</div>
        <div>{email}</div>
        <div>
          <Link to="/user-detail">My Profile</Link>
        </div>
      </Card>
    </div>
  );
};

export default HoverCard;
