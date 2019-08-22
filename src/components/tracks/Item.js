import React from 'react';
import './item.scss';

const Item = ({ name, duration, explicit }) => {
  return (
    <div className="track-item">
      <div>{name}</div>
      <div>
        <span>{millisecondsToMinutesAndSeconds(duration)}</span>
        <span>{explicit ? 'explicit version' : null}</span>
      </div>
    </div>
  );
};

const millisecondsToMinutesAndSeconds = timeInMilliseconds => {
  if (!timeInMilliseconds) return '';
  const seconds = 1000 * Math.ceil(timeInMilliseconds / 1000); // round to nearest second
  const date = new Date(seconds);
  return `${date.getUTCMinutes()}:${date.getUTCSeconds()}`; // "4:59"
};

export default Item;
