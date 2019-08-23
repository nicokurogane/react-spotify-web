import { combineReducers } from 'redux';
import trackReducers from './TracksReducers';
import albumReducers from './AlbumsReducers';
import artistReducers from './ArtistReducers';

const spotifyReducers = combineReducers({
  albums: albumReducers,
  artists: artistReducers,
  tracks: trackReducers
});

export default spotifyReducers;
