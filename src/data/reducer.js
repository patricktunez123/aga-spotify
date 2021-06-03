import { SET_PLAYLISTS, SET_TOKEN, SET_USER } from "./actionTypes";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

export const reducer = (state, { type, payload }) => {
  console.log(type);
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: payload,
      };
    default:
      return state;
  }
};
