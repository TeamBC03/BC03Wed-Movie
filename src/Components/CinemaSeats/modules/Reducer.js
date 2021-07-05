import * as TypeAction from "./constants";
const initial = {
  data: null,
  err: null,
  loading: true,
  databook: null,
  errBook: null,
  loadingBook: true,
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
    case TypeAction.CINEMA_SEAT_BOOKING_REQUEST: {
      state.loadingBook = true;
      state.databook = null;
      state.errBook = null;
      return { ...state };
    }
    case TypeAction.CINEMA_SEAT_BOOKING_SUCCESS: {
      state.loadingBook = false;
      state.databook = action.payload;
      state.errBook = null;
      return { ...state };
    }
    case TypeAction.CINEMA_SEAT_BOOKING_FAILED: {
      state.loadingBook = false;
      state.databook = null;
      state.errBook = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default CinemaSeatsReducer;
