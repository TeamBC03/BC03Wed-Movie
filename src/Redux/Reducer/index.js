import { combineReducers } from "redux";
import DetailMovie from "../../Container/HomeTemplate/DetailMoviePage/Modules/Reducer";

const rootReducer = combineReducers({
  DetailMovie: DetailMovie,
});
export default rootReducer;
