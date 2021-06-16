import * as TypeAction from "./constants";
import axios from "axios";

const listMovieTheaterRequest = () => {
  return { type: TypeAction.LIST_MovieTheater_REQEST };
};
const listMovieTheaterSucess = (data) => {
  return { type: TypeAction.LIST_MovieTheater_SUCCESS, payload: data };
};
const listMovieTheaterErr = (err) => {
  return { type: TypeAction.LIST_MovieTheater_FAILED, payload: err };
};

export const listTheaterFectch = () => {
  return (dispatch) => {
    dispatch(listMovieTheaterRequest);
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(listMovieTheaterSucess(result.data));
        console.log(result);
      })
      .catch((err) => {
        dispatch(listMovieTheaterErr(err));
        console.log(err);
      });
  };
};
