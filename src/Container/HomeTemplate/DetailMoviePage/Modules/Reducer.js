import * as TypeAction from "./constants";
const initial = {
  data: null,
  err: null,
  loading: true,
};
const DetailMovie = (state = initial, action) => {
  switch (action.type) {
    case TypeAction.DETAIL_MOVIE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }
    case TypeAction.DETAIL_MOVIE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }
    case TypeAction.DETAIL_MOVIE_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default DetailMovie;
