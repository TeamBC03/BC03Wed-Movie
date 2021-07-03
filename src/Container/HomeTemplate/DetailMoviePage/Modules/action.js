import * as TypeAction from "./constants";
import axios from "axios";

const detailMovieRequest = () => {
  return { type: TypeAction.DETAIL_MOVIE_REQUEST };
};
const detailMovieSuccess = (data) => {
  return { type: TypeAction.DETAIL_MOVIE_SUCCESS, payload: data };
};
const detailMovieErr = (err) => {
  return { type: TypeAction.DETAIL_MOVIE_FAILED, payload: err };
};

export const detailMovieFectch = (maphim) => {
  return (dispatch) => {
    dispatch(detailMovieRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=" +
        maphim,
      method: "GET",
    })
      .then((result) => {
        dispatch(detailMovieSuccess(result.data));
        console.log(result.data);
      })
      .catch((err) => {
        dispatch(detailMovieErr(err));
      });
  };
};
