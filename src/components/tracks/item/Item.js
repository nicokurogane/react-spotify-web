import React from 'react';
import './item.scss';

const Item = ({ name, duration }) => {
  return (
    <div className="track-item">
      <div>{name}</div>
      <div>
        <span>{millisecondsToMinutesAndSeconds(duration)}</span>
      </div>
    </div>
  );
};

const millisecondsToMinutesAndSeconds = timeInMilliseconds => {
  if (!timeInMilliseconds) return '';
  const seconds = 1000 * Math.ceil(timeInMilliseconds / 1000); // round to nearest second
  const date = new Date(seconds);
  return `${date.getUTCMinutes()}:${addZero(date.getUTCSeconds())}`; // "4:59"
};

const addZero = second => {
  if (second < 10) {
    second = `0${second}`;
  }
  return second;
};

export default Item;
