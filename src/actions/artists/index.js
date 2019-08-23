import { FETCH_SINGLE_ARTIST } from './actionType';
import { getArtistById } from '../../data/network-utils/spotify/artist';

export const fetchArtistById = id => async dispatch => {
  await getArtistById(id)
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_SINGLE_ARTIST, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};
