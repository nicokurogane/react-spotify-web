import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import { logOutUser } from '../../actions/users';

import './hover-card.scss';

const ConnectedHoverCard = ({ showCard, displayName, email, logOutUser }) => {
  return (
    <div className="hover-card-container">
      <Card
        className="hover-card"
        style={{
          opacity: showCard ? '1' : '0',
          zIndex: showCard ? '500' : '-500'
        }}
      >
        <div>{displayName}</div>
        <div>{email}</div>
        <div>
          <Link to="/user-detail">My Profile</Link>
        </div>
        <div>
          <Button
            type="link"
            style={{ padding: '0' }}
            onClick={() => logOutUser()}
          >
            Log Out
          </Button>
        </div>
      </Card>
    </div>
  );
};

const HoverCard = connect(
  null,
  { logOutUser }
)(ConnectedHoverCard);

export default HoverCard;
