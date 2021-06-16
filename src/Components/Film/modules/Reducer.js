import Film from "..";
import * as TypeAction from "./constant";
const initital = {
  data: null,
  err: null,
  loading: true,
};
const Film_Reducer = (state = initital, action) => {
  switch (action.type) {
    case TypeAction.FILM_HOME_REQUEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }
    case TypeAction.FILM_HOME_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }
    case TypeAction.FILM_HOME_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default Film_Reducer;
