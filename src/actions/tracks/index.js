import { FETCH_TRACKS_LIST } from './actionType';

export const fetchTracks = () => async dispatch => {
  dispatch({
    type: FETCH_TRACKS_LIST,
    payload: [
      {
        imageUrl:
          'https://smhttp-ssl-73418.nexcesscdn.net/tech/en/wp-content/uploads/sites/2/2019/07/gorillaz-cover.jpg',
        title: 'Humanz',
        subtitle: 'Gorillaz'
      }
    ]
  });
};
