import * as constants from './actionType';
import * as requests from '../../data/network-utils/spotify/users';

export const fetchLoggedInUserInfo = () => async dispatch => {
  await requests
    .getLoggedInUser()
    .then(response => {
      dispatch({
        type: constants.FETCH_LOGGED_IN_USER,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
