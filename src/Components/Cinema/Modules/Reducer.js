import * as TypeAction from "./constants";
const initital = {
  data: null,
  err: null,
  loading: true,
  dataSys: null,
  errSys: null,
  loadingSys: true,
};
const CinemaReducer = (state = initital, action) => {
  switch (action.type) {
    case TypeAction.CINEMA_HOME_REQUEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }
    case TypeAction.CINEMA_HOME_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }
    case TypeAction.CINEMA_HOME_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }
    case TypeAction.CINEMA_SYSTEM_HOME_REQUEST: {
      state.loadingSys = true;
      state.dataSys = null;
      state.errSys = null;
      return { ...state };
    }
    case TypeAction.CINEMA_SYSTEM_HOME_SUCCESS: {
      state.loadingSys = false;
      state.dataSys = action.payload;
      state.errSys = null;
      return { ...state };
    }
    case TypeAction.CINEMA_SYSTEM_HOME_FAILED: {
      state.loadingSys = false;
      state.dataSys = null;
      state.errSys = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default CinemaReducer;
