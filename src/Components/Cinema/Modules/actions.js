import * as TypeAction from "./constants";
import axios from "axios";

const Cinema_Request = () => {
  return {
    type: TypeAction.CINEMA_HOME_REQUEST,
  };
};
const Cinema_Success = (data) => {
  return { type: TypeAction.CINEMA_HOME_SUCCESS, payload: data };
};
const Cinema_Err = (err) => {
  return { type: TypeAction.CINEMA_HOME_FAILED, payload: err };
};

export const Cinema_Fetch = () => {
  return (dispatch) => {
    dispatch(Cinema_Request());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(Cinema_Success(result.data));
      })
      .catch((err) => {
        dispatch(Cinema_Err(err));
      });
  };
};
const CinemaSys_Request = () => {
  return {
    type: TypeAction.CINEMA_SYSTEM_HOME_REQUEST,
  };
};
const CinemaSys_Success = (data) => {
  return { type: TypeAction.CINEMA_SYSTEM_HOME_SUCCESS, payload: data };
};
const CinemaSys_Err = (err) => {
  return { type: TypeAction.CINEMA_SYSTEM_HOME_FAILED, payload: err };
};

export const CinemaSys_Fetch = (cumrap) => {
  return (dispatch) => {
    dispatch(CinemaSys_Request());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cumrap}&maNhom=GP01`,
      method: "GET",
    })
      .then((result) => {
        dispatch(CinemaSys_Success(result.data));
        console.log(result.data);
      })
      .catch((err) => {
        dispatch(CinemaSys_Err(err));
      });
  };
};
