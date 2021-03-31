import {
  GET_FAVS,
  GET_TRENDS,
  UPDATE_SEARCH,
  ADD_FAV,
  DELETE_FAV,
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
    const favArr = data.map((item) => item.data);
    dispatch({
      type: GET_FAVS,
      payload: favArr,
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

export const delFav = (id) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/videos/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_FAV,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addFav = (id, vidItem) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/videos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ videoData: vidItem }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await res.json();
    dispatch({
      type: ADD_FAV,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
