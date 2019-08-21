import { spotifyClient } from '../../client/clients';

export const getAlbums = async () => {
  let serverResponse = await spotifyClient
    .get('/albums?ids=41MnTivkwTO3UUJ8DrqEJJ')
    .then(response => response);
  return serverResponse;
};
