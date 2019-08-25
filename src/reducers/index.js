import { combineReducers } from 'redux';
import albumReducers from './AlbumsReducers';
import artistReducers from './ArtistReducers';
import usersReducers from './UsersReducers';

const spotifyReducers = combineReducers({
  albums: albumReducers,
  artists: artistReducers,
  users: usersReducers
});

export default spotifyReducers;
