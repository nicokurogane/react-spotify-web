import * as constants from '../actions/albums/actionType';

const initialState = {
  list: [],
  selected: {},
  searchTerm: '',
  isLoadingAlbums: false
};

const albumReducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALBUMS_LIST_SUCCEDED:
      return { ...state, list: action.payload, isLoadingAlbums: false };
    case constants.FETCH_SINGLE_ALBUM:
      return { ...state, selected: action.payload, isLoadingAlbums: false };
    case constants.UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case constants.LOADING_ALBUMS:
      return { ...state, isLoadingAlbums: true };
    case constants.LOADING_ALBUMS_FAILED:
      return { ...state, isLoadingAlbums: false };
    default:
      return state;
  }
};

export default albumReducers;
