import { spotifyClient } from '../../client/clients';

export const getLoggedInUser = async () => {
  let serverResponse = await spotifyClient.get(`me`);
  return serverResponse;
};
