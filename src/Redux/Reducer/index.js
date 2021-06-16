import { combineReducers } from "redux";
import DetailTicketMovie from "../../Components/DetailTicketMovie/Modules/Reducer";

import DetailMovie from "../../Container/HomeTemplate/DetailMoviePage/Modules/Reducer";
import nowMovieReducer from "../../Container/HomeTemplate/NowlistPage/Modules/Reducer";
const rootReducer = combineReducers({
  DetailMovie: DetailMovie,
  DetailTicketMovie: DetailTicketMovie,
  nowMovieReducer: nowMovieReducer,
});
export default rootReducer;
