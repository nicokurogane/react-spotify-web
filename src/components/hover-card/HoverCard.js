import React from 'react';
import { Card } from 'antd';

import './hover-card.scss';

const HoverCard = ({ showCard, displayName, email }) => {
  return (
    <div className="hover-card-container">
      <Card className="hover-card" style={{ opacity: showCard ? '1' : '0' }}>
        <div>{displayName}</div>
        <div>{email}</div>
      </Card>
    </div>
  );
};

export default HoverCard;
