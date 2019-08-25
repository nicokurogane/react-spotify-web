import React from 'react';
import ItemCard from '../../item-card/ItemCard';

import './related-artist-list.scss';

const RelatedArtistList = ({ artists }) => {
  return (
    <div className="related-artist-list-container">
      <div className="artists">
        {artists.map(artist => {
          const { name, images } = artist;
          return <ItemCard imageUrl={images[1].url} title={name} />;
        })}
      </div>
    </div>
  );
};

export default RelatedArtistList;
