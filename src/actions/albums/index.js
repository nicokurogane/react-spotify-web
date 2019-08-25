import * as constants from './actionType';
import * as requests from '../../data/network-utils/spotify/albums';

export const fetchAlbums = () => async dispatch => {
  await requests
    .getAlbums()
    .then(response =>
      dispatch({ type: constants.FETCH_ALBUMS_LIST, payload: response.data })
    )
    .catch(err => {
      console.log(err);
    });
};

export const fetchAlbumsBySearchTerm = (term, offset = 0) => async dispatch => {
  await requests
    .getAlbumsByTerm(term, offset)
    .then(response => {
      dispatch({
        type: constants.FETCH_ALBUMS_LIST,
        payload: response.data.albums.items
      });
    })
    .catch(err => {
      console.log(err);
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
