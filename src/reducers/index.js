import { combineReducers } from "redux";
import trackReducers from './TracksReducers';

const spotifyReducers = combineReducers({
  tracks: trackReducers
});

export default spotifyReducers;