import {
  FETCH_ALBUMS_LIST,
  FETCH_SINGLE_ALBUM,
  UPDATE_SEARCH_TERM
} from '../actions/albums/actionType';

const initialState = {
  list: [],
  selected: {},
  searchTerm: ''
};

const albumReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_LIST:
      return { ...state, list: action.payload };
    case FETCH_SINGLE_ALBUM:
      return { ...state, selected: action.payload };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default albumReducers;
