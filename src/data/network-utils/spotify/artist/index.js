import { spotifyClient } from '../../client/clients';

export const getArtistById = async id => {
  let serverResponse = await spotifyClient.get(`artists/${id}`);
  return serverResponse;
};

export const getArtistTopTracks = async id => {
  let serverResponse = await spotifyClient.get(
    `artists/${id}/top-tracks?country=SV`
  );
  return serverResponse;
};

export const getArtistRelatedArtists = async id => {
  let serverResponse = await spotifyClient.get(`artists/${id}/related-artists`);
  return serverResponse;
};
