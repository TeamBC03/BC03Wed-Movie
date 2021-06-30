import { combineReducers } from "redux";
import DetailTicketMovie from "../../Components/DetailTicketMovie/Modules/Reducer";
import Film_Reducer from "../../Components/Film/modules/Reducer";
import DetailCinemaReducer from "../../Container/HomeTemplate/DetailCinemaPage/modules/Reducer";
import DetailMovie from "../../Container/HomeTemplate/DetailMoviePage/Modules/Reducer";
import nowMovieReducer from "../../Container/HomeTemplate/NowlistPage/Modules/Reducer";
const rootReducer = combineReducers({
  DetailMovie: DetailMovie,
  DetailTicketMovie: DetailTicketMovie,
  nowMovieReducer: nowMovieReducer,
  Film_Reducer: Film_Reducer,
  DetailCinemaReducer: DetailCinemaReducer,
});
export default rootReducer;
