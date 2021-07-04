import * as TypeAction from "./constants";
import axios from "axios";

const CinemaSeatRequest = () => {
  return { type: TypeAction.CINEMA_SEATS_REQUEST };
};
const CinemaSeatSuccess = (data) => {
  return { type: TypeAction.CINEMA_SEATS_SUCCESS, payload: data };
};
const CinemaSeatErr = (err) => {
  return { type: TypeAction.CINEMA_SEATS_FAILED, payload: err };
};

export const CinemaSeatFectch = (maLichChieu) => {
  return (dispatch) => {
    dispatch(CinemaSeatRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=" +
        maLichChieu,
      method: "GET",
    })
      .then((result) => {
        dispatch(CinemaSeatSuccess(result.data));
        console.log(result.data);
      })
      .catch((err) => {
        dispatch(CinemaSeatErr(err));
      });
  };
};
