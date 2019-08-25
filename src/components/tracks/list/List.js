import React from 'react';
import TrackItem from '../item/Item';
import TitleSection from '../../title-section/TitleSection';

import './list.scss';

const List = ({ tracks = [] }) => {
  console.log(tracks);

  return (
    <div className="track-list-container">
      <TitleSection title="Track list" />
      <div className="list">
        {tracks.map(track => {
          const { name, duration_ms, explicit } = track;
          return (
            <div key={track.id}>
              <TrackItem
                name={name}
                duration={duration_ms}
                explicit={explicit}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
