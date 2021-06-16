import * as TypeAction from "./constant";
import axios from "axios";

const nowMovieRequest = () => {
  console.log("reChay");
  return { type: TypeAction.NOW_LIST_MOVIE_REQUEST };
};
const nowMovieSuccess = (data) => {
  return { type: TypeAction.NOW_LIST_MOVIE_SUCCESS, payload: data };
};
const nowMovieErr = (err) => {
  return { type: TypeAction.NOW_LIST_MOVIE_FAILED, payload: err };
};

export const nowListMovieFectch = () => {
  return (dispatch) => {
    dispatch(nowMovieRequest);
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        dispatch(nowMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(nowMovieErr(err));
      });
  };
};
