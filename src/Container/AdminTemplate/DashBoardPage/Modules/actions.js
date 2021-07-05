import * as TypeAction from "./constants";
import axios from "axios";

const DashboardRequest = () => {
  return { type: TypeAction.DASHBOARD_REQUEST };
};
const DashboardSuccess = (data) => {
  return { type: TypeAction.DASHBOARD_SUCCESS, payload: data };
};
const DashboardErr = (err) => {
  return { type: TypeAction.DASHBOARD_FAILED, payload: err };
};

export const DashboardFectch = () => {
  return (dispatch) => {
    dispatch(DashboardRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        dispatch(DashboardSuccess(result.data));
        console.log(result);
      })
      .catch((err) => {
        dispatch(DashboardErr(err));
      });
  };
};
const DashboardFilmRequest = () => {
  return { type: TypeAction.DASHBOARD_FILM_REQUEST };
};
const DashboardFilmSuccess = (data) => {
  return { type: TypeAction.DASHBOARD_FILM_SUCCESS, payload: data };
};
const DashboardFilmErr = (err) => {
  return { type: TypeAction.DASHBOARD_FILM_FAILED, payload: err };
};

export const DashboardFilmFectch = () => {
  return (dispatch) => {
    dispatch(DashboardFilmRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        dispatch(DashboardFilmSuccess(result.data));

        console.log(result);
      })
      .catch((err) => {
        dispatch(DashboardFilmErr(err));
        console.log(err);
      });
  };
};
