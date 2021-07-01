import * as TypeAction from "./constants";
const initial = {
  data: null,
  err: null,
  loading: true,
};
const InfoReducer = (state = initial, action) => {
  switch (action.type) {
    case TypeAction.INFO_REQUEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }
    case TypeAction.INFO_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }
    case TypeAction.INFO_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default InfoReducer;
