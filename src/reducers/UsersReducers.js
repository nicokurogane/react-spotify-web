import { FETCH_LOGGED_IN_USER } from '../actions/users/actionType';

const initialState = {
  selected: {}
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGGED_IN_USER:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default usersReducers;
