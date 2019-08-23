import {
  FETCH_SINGLE_ARTIST,
  FETCH_ARTIST_TOP_TRACKS,
  FETCH_ARTIST_RELATED_ARTISTS
} from './actionType';
import {
  getArtistById,
  getArtistTopTracks,
  getArtistRelatedArtists
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
      dispatch({
        type: FETCH_ARTIST_TOP_TRACKS,
        payload: response.data.tracks
      });
    })
    .catch(err => console.log(err));
};

export const fetchArtistRelatedArtist = id => async dispatch => {
  await getArtistRelatedArtists(id)
    .then(response => {
      dispatch({
        type: FETCH_ARTIST_RELATED_ARTISTS,
        payload: response.data.artists
      });
    })
    .catch(err => console.log(err));
};
