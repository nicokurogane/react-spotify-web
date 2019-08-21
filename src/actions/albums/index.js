import { FETCH_ALBUMS_LIST } from './actionType';
import {
  getAlbums,
  getAlbumsByTerm
} from '../../data/network-utils/spotify/albums';

export const fetchAlbums = () => async dispatch => {
  await getAlbums()
    .then(response =>
      dispatch({ type: FETCH_ALBUMS_LIST, payload: response.data })
    )
    .catch(err => {
      console.log(err);
    });
};

export const fetchAlbumsBySearchTerm = term => async dispatch => {
  await getAlbumsByTerm(term)
    .then(response => {
      dispatch({
        type: FETCH_ALBUMS_LIST,
        payload: response.data.albums.items
      });
    })
    .catch(err => {
      console.log(err);
    });
};
