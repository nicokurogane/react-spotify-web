import {
  FETCH_SINGLE_ARTIST,
  FETCH_ARTIST_TOP_TRACKS
} from '../actions/artists/actionType';

const initialState = {
  selected: {},
  selectedTopTracks: []
};

const artistReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_ARTIST:
      return { ...state, selected: action.payload };
    case FETCH_ARTIST_TOP_TRACKS:
      return { ...state, selectedTopTracks: action.payload };
    default:
      return state;
  }
};

export default artistReducers;
