import {
  GET_TRENDS,
  UPDATE_SEARCH,
  GET_FAVS,
  ADD_FAV,
  DELETE_FAV,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  loading: false,
  trendVideos: {
    videoItems: [],
    nextPageToken: null,
  },
  searchVideos: {
    videoItems: [],
    nextPageToken: null,
  },
  favVideos: [],
  favIds: {},
};

function fillFavIds(arr) {
  const fillArr = {};
  arr.forEach((item) => {
    fillArr[item.id] = true;
  });
  return fillArr;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDS:
      return {
        ...state,
        trendVideos: {
          videoItems: [...action.payload.items],
          nextPageToken: action.payload.nextPageToken,
        },
        loading: false,
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        searchVideos: {
          videoItems: [...action.payload.items],
          nextPageToken: action.payload.nextPageToken,
        },
        loading: false,
      };
    case GET_FAVS:
      return {
        ...state,
        favVideos: [...action.payload],
        loading: false,
        favIds: fillFavIds(action.payload),
      };
    case ADD_FAV:
      return {
        ...state,
        favVideos: [...state.favVideos, action.payload],
        favIds: { ...state.favIds, [action.payload.id]: true },
        loading: false,
      };
    case DELETE_FAV:
      return {
        ...state,
        favVideos: state.favVideos.filter((vid) => vid.id !== action.payload),
        favIds: { ...state.favIds, [action.payload]: false },
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
