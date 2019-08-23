import { FETCH_SINGLE_ARTIST, FETCH_ARTIST_TOP_TRACKS } from './actionType';
import {
  getArtistById,
  getArtistTopTracks
} from '../../data/network-utils/spotify/artist';

export const fetchArtistById = id => async dispatch => {
  await getArtistById(id)
    .then(response => {
      dispatch({ type: FETCH_SINGLE_ARTIST, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchArtistTopTracks = id => async dispatch => {
  await getArtistTopTracks(id)
    .then(response => {
      console.log(response.data.tracks);
      dispatch({
        type: FETCH_ARTIST_TOP_TRACKS,
        payload: response.data.tracks
      });
    })
    .catch(err => console.log(err));
};
