import { spotifyClient } from '../../client/clients';

export const getAlbums = async () => {
  let serverResponse = await spotifyClient.get(
    '/albums?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37'
  );
  //  .then(response => response);
  return serverResponse;
};

export const getAlbumsByTerm = async (term, offset = 0, limit = 20) => {
  let serverResponse = await spotifyClient.get(
    `/search?q=${term}*&type=album&offset=${offset}&limit=${limit}`
  );
  return serverResponse;
};

export const getAlbumById = async id => {
  let serverResponse = await spotifyClient.get(`albums/${id}`);
  return serverResponse;
};
