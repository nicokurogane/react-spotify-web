import { FETCH_SINGLE_ARTIST } from '../actions/artists/actionType';

const initialState = {
  selected: {}
};

const artistReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_ARTIST:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default artistReducers;
