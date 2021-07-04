import * as TypeAction from "./constants";
const initial = {
  data: null,
  err: null,
  loading: true,
};
const CinemaSeatsReducer = (state = initial, action) => {
  switch (action.type) {
    case TypeAction.CINEMA_SEATS_REQUEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }
    case TypeAction.CINEMA_SEATS_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }
    case TypeAction.CINEMA_SEATS_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default CinemaSeatsReducer;
