import React from 'react';
import TrackItem from './Item';

const List = ({ tracks = [] }) => {
  console.log(tracks);

  return (
    <div className="track-list-container">
      <div> TRACKLIST </div>
      {tracks.map(track => {
        const { name, duration_ms, explicit } = track;
        return (
          <div key={track.id}>
            <TrackItem name={name} duration={duration_ms} explicit={explicit} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
