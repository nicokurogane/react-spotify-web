import { ApiClient } from './axiosClient';

export const spotifyClient = new ApiClient(
  process.env.REACT_APP_SPOTIFY_BASE_URL
);
