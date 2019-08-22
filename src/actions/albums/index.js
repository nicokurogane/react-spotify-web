import { FETCH_ALBUMS_LIST, FETCH_SINGLE_ALBUM } from './actionType';
import {
  getAlbums,
  getAlbumsByTerm,
  getAlbumById
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

export const fetchAlbumsBySearchTerm = (term, offset = 0) => async dispatch => {
  await getAlbumsByTerm(term, offset)
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

export const fetchAlbumDetailsById = id => async dispatch => {
  await getAlbumById(id)
    .then(response => {
      console.log(response.data);
      dispatch({ type: FETCH_SINGLE_ALBUM, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};
