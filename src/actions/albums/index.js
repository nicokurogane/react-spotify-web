import * as constants from './actionType';
import * as requests from '../../data/network-utils/spotify/albums';

export const fetchAlbums = () => async dispatch => {
  dispatch({ type: constants.LOADING_ALBUMS });
  await requests
    .getAlbums()
    .then(response => {
      dispatch({
        type: constants.FETCH_ALBUMS_LIST_SUCCEDED,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: constants.LOADING_ALBUMS_FAILED });
    });
};

export const fetchAlbumsBySearchTerm = (term, offset = 0) => async dispatch => {
  dispatch({ type: constants.LOADING_ALBUMS });
  await requests
    .getAlbumsByTerm(term, offset)
    .then(response => {
      dispatch({
        type: constants.FETCH_ALBUMS_LIST_SUCCEDED,
        payload: response.data.albums.items
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: constants.LOADING_ALBUMS_FAILED });
    });
};

export const fetchAlbumDetailsById = id => async dispatch => {
  await requests
    .getAlbumById(id)
    .then(response => {
      dispatch({ type: constants.FETCH_SINGLE_ALBUM, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateSearchAlbumTerm = term => {
  return { type: constants.UPDATE_SEARCH_TERM, payload: term };
};
