import { combineReducers } from 'redux';
import trackReducers from './TracksReducers';
import albumReducers from './AlbumsReducers';
import artistReducers from './ArtistReducers';
import usersReducers from './UsersReducers';

const spotifyReducers = combineReducers({
  albums: albumReducers,
  artists: artistReducers,
  tracks: trackReducers,
  users: usersReducers
});

export default spotifyReducers;
