import { combineReducers } from 'redux';
import trackReducers from './TracksReducers';
import albumReducers from './AlbumsReducers';

const spotifyReducers = combineReducers({
  albums: albumReducers,
  tracks: trackReducers
});

export default spotifyReducers;
