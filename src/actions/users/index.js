import { FETCH_LOGGED_IN_USER } from './actionType';
import { getLoggedInUser } from '../../data/network-utils/spotify/users';

export const fetchLoggedInUserInfo = () => async dispatch => {
  await getLoggedInUser()
    .then(response => {
      dispatch({
        type: FETCH_LOGGED_IN_USER,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
