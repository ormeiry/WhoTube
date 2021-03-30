import {
  GET_FAVS,
  GET_TRENDS,
  UPDATE_SEARCH,
  //   GET_FAVS,
  //   ADD_FAV,
  //   DELETE_FAV,
  SET_LOADING,
} from './types';

export const getTrends = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/videos/trend');
    const data = await res.json();

    dispatch({
      type: GET_TRENDS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getFavs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/videos');
    const data = await res.json();

    dispatch({
      type: GET_FAVS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const sendSearch = (query) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/videos/search?name=${query}`);
    const data = await res.json();

    dispatch({
      type: UPDATE_SEARCH,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
