import * as constants from './actionType';
import * as requests from '../../data/network-utils/spotify/artist';

export const fetchArtistById = id => async dispatch => {
  await requests
    .getArtistById(id)
    .then(response => {
      dispatch({ type: constants.FETCH_SINGLE_ARTIST, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchArtistTopTracks = id => async dispatch => {
  await requests
    .getArtistTopTracks(id)
    .then(response => {
      dispatch({
        type: constants.FETCH_ARTIST_TOP_TRACKS,
        payload: response.data.tracks
      });
    })
    .catch(err => console.log(err));
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
