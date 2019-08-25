import * as constants from './actionType';
import * as requests from '../../data/network-utils/spotify/artist';

export const fetchArtistById = id => async dispatch => {
  dispatch({ type: constants.LOADING_ARTIST });
  await requests
    .getArtistById(id)
    .then(response => {
      dispatch({
        type: constants.FETCH_SINGLE_ARTIST_SUCCEDED,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: constants.LOADING_ARTIST_FAILED });
    });
};

export const fetchArtistTopTracks = id => async dispatch => {
  dispatch({ type: constants.LOADING_TOP_TRACKS });
  await requests
    .getArtistTopTracks(id)
    .then(response => {
      dispatch({
        type: constants.FETCH_ARTIST_TOP_TRACKS_SUCCEDED,
        payload: response.data.tracks
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: constants.LOADING_TOP_TRACKS_FAILED });
    });
};

export const fetchArtistRelatedArtist = id => async dispatch => {
  await requests
    .getArtistRelatedArtists(id)
    .then(response => {
      dispatch({
        type: constants.FETCH_ARTIST_RELATED_ARTISTS,
        payload: response.data.artists
      });
    })
    .catch(err => console.log(err));
};
