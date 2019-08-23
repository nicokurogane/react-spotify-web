import React from 'react';

import './top-tracks-list.scss';

const TopTracksList = ({ tracks }) => {
  return (
    <div className="top-tracks-list-container">
      {tracks.map(track => {
        const { name, popularity } = track;
        return (
          <div className="track">
            <span>{name}</span>
            <span>{popularity}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TopTracksList;
