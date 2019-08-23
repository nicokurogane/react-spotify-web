import React from 'react';

import './genres-list.scss';

const GenresList = ({ genres }) => {
  return (
    <div className="genres-container">
      <span>genres: </span>
      {genres.map(genre => (
        <span className="genre" key={genre}>
          {genre}
        </span>
      ))}
    </div>
  );
};

export default GenresList;
