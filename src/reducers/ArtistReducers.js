import * as constants from '../actions/artists/actionType';
import * as userConstants from '../actions/users/actionType';

const initialState = {
  selected: {},
  selectedTopTracks: [],
  relatedArtists: [],
  isLoadingBasicInfo: false,
  isLoadingTopTracks: false,
  isLoadingRelatedArtist: false
};

const artistReducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_SINGLE_ARTIST_SUCCEDED:
      return { ...state, selected: action.payload, isLoadingBasicInfo: false };
    case constants.FETCH_ARTIST_TOP_TRACKS_SUCCEDED:
      return {
        ...state,
        selectedTopTracks: action.payload,
        isLoadingTopTracks: false
      };
    case constants.FETCH_ARTIST_RELATED_ARTISTS_SUCCEDED:
      return {
        ...state,
        relatedArtists: action.payload,
        isLoadingRelatedArtist: false
      };
    case constants.LOADING_ARTIST:
      return { ...state, isLoadingBasicInfo: true };
    case constants.LOADING_ARTIST_FAILED:
      return { ...state, isLoadingBasicInfo: false };
    case constants.LOADING_TOP_TRACKS:
      return { ...state, selectedTopTracks: [], isLoadingTopTracks: true };
    case constants.LOADING_TOP_TRACKS_FAILED:
      return { ...state, isLoadingTopTracks: false };
    case constants.LOADING_RELATED_ARTISTS:
      return { ...state, relatedArtists: [], isLoadingRelatedArtist: true };
    case constants.LOADING_RELATED_ARTISTS_FAILED:
      return { ...state, isLoadingRelatedArtist: false };
    case userConstants.LOG_OUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default artistReducers;
