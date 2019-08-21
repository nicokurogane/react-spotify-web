import { FETCH_ALBUMS_LIST } from './actionType';
import { getAlbums } from '../../data/network-utils/spotify/albums';

export const fetchAlbums = () => async dispatch => {
  await getAlbums()
    .then(response =>
      dispatch({ type: FETCH_ALBUMS_LIST, payload: response.data })
    )
    .catch(err => {
      console.log(err);
    });
};
