import { FETCH_ALBUMS_LIST } from '../actions/albums/actionType';

const initialState = {
  list: []
};

const albumReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_LIST:
      console.log(action.payload);
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default albumReducers;
