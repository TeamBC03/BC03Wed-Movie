import { combineReducers } from "redux";
import CinemaReducer from "../../Components/Cinema/Modules/Reducer";
import CinemaSeatsReducer from "../../Components/CinemaSeats/modules/Reducer";
import DetailTicketMovie from "../../Components/DetailTicketMovie/Modules/Reducer";
import Film_Reducer from "../../Components/Film/modules/Reducer";
import DetailCinemaReducer from "../../Container/HomeTemplate/DetailCinemaPage/modules/Reducer";
import DetailMovie from "../../Container/HomeTemplate/DetailMoviePage/Modules/Reducer";
import InfoReducer from "../../Container/HomeTemplate/InforUser/Modules/Reducer";
import nowMovieReducer from "../../Container/HomeTemplate/NowlistPage/Modules/Reducer";
const rootReducer = combineReducers({
  DetailMovie: DetailMovie,
  DetailTicketMovie: DetailTicketMovie,
  nowMovieReducer: nowMovieReducer,
  Film_Reducer: Film_Reducer,
  DetailCinemaReducer: DetailCinemaReducer,
  InfoReducer: InfoReducer,
  CinemaReducer: CinemaReducer,
  CinemaSeatsReducer: CinemaSeatsReducer,
});
export default rootReducer;
