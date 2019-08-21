import { FETCH_TRACKS_LIST } from '../actions/tracks/actionType';

const initialState = {
  list: []
};

const trackReducers = (state = initialState, action) =>{
    switch(action.type){
      case FETCH_TRACKS_LIST:
        return {...state, list: action.payload}
        default:
          return state;
    } 
}

export default trackReducers;