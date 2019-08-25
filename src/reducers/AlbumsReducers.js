import * as constants from '../actions/albums/actionType';

const initialState = {
  list: [],
  selected: {},
  searchTerm: '',
  loadingAlbums: false
};

const albumReducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALBUMS_LIST:
      return { ...state, list: action.payload };
    case constants.FETCH_SINGLE_ALBUM:
      return { ...state, selected: action.payload };
    case constants.UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default albumReducers;
