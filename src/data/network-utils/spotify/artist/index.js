import { spotifyClient } from '../../client/clients';

export const getArtistById = async id => {
  let serverResponse = await spotifyClient.get(`artists/${id}`);
  return serverResponse;
};
