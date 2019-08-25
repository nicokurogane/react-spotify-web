import * as constants from '../actions/artists/actionType';

const initialState = {
  selected: {},
  selectedTopTracks: [],
  relatedArtists: []
};

const artistReducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_SINGLE_ARTIST:
      return { ...state, selected: action.payload };
    case constants.FETCH_ARTIST_TOP_TRACKS:
      return { ...state, selectedTopTracks: action.payload };
    case constants.FETCH_ARTIST_RELATED_ARTISTS:
      return { ...state, relatedArtists: action.payload };
    default:
      return state;
  }
};

export default artistReducers;
