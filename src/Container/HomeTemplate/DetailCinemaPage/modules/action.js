import * as TypeAction from "./constants";
import axios from "axios";

const detailCinemaRequest = () => {
  return { type: TypeAction.DETAIL_CINEMA_REQUEST };
};
const detailCinemaSuccess = (data) => {
  return { type: TypeAction.DETAIL_CINEMA_SUCCESS, payload: data };
};
const detailCinemaErr = (err) => {
  return { type: TypeAction.DETAIL_CINEMA_FAILED, payload: err };
};

export const detailCinemaFectch = (macumrap, marap) => {
  return (dispatch) => {
    dispatch(detailCinemaRequest);
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${macumrap}&maNhom=GP01`,
      method: "GET",
    })
      .then((result) => {
        dispatch(detailCinemaSuccess({ data: result.data, marap: marap }));
        console.log(result);
      })
      .catch((err) => {
        dispatch(detailCinemaErr(err));
      });
  };
};
