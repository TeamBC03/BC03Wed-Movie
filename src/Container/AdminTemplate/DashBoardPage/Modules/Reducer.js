import * as TypeAction from "./constants";
const initial = {
  data: null,
  err: null,
  loading: true,
  dataFilm: null,
  errFilm: null,
  loadingFilm: true,
};
const DashBoardReducer = (state = initial, action) => {
  switch (action.type) {
    case TypeAction.DASHBOARD_REQUEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }
    case TypeAction.DASHBOARD_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }
    case TypeAction.DASHBOARD_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }
    case TypeAction.DASHBOARD_FILM_REQUEST: {
      state.loadingFilm = true;
      state.dataFilm = null;
      state.errFilm = null;
      return { ...state };
    }
    case TypeAction.DASHBOARD_FILM_SUCCESS: {
      state.loadingFilm = false;
      state.dataFilm = action.payload;
      state.errFilm = null;
      return { ...state };
    }
    case TypeAction.DASHBOARD_FILM_FAILED: {
      state.loadingFilm = false;
      state.dataFilm = null;
      state.errFilm = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default DashBoardReducer;
