import {
  FETCH_SINGLE_ARTIST,
  FETCH_ARTIST_TOP_TRACKS,
  FETCH_ARTIST_RELATED_ARTISTS
} from '../actions/artists/actionType';

const initialState = {
  selected: {},
  selectedTopTracks: [],
  relatedArtists: []
};

const artistReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_ARTIST:
      return { ...state, selected: action.payload };
    case FETCH_ARTIST_TOP_TRACKS:
      return { ...state, selectedTopTracks: action.payload };
    case FETCH_ARTIST_RELATED_ARTISTS:
      return { ...state, relatedArtists: action.payload };
    default:
      return state;
  }
};

export default artistReducers;
