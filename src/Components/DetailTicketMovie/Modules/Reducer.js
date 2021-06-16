import * as TypeAction from "./constants";
const initial = {
  data: null,
  err: null,
  loading: true,
};
const DetailTicketMovie = (state = initial, action) => {
  switch (action.type) {
    case TypeAction.LIST_MovieTheater_REQEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }
    case TypeAction.LIST_MovieTheater_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }
    case TypeAction.LIST_MovieTheater_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default DetailTicketMovie;
