import * as constants from './actionType';
import * as requests from '../../data/network-utils/spotify/users';
import LocalStorageHandler from '../../data/local-storage-handler/LocalStorageHandler';
import history from '../../history';

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

export const logOutUser = () => async dispatch => {
  LocalStorageHandler.cleanAuthToken();
  dispatch({ type: constants.LOG_OUT_USER });
  history.push('/');
};
