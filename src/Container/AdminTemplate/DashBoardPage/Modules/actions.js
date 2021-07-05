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
export const DashboardAddUser = (user) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }

  return (dispatch) => {
    dispatch(actAddUserRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(actAddUserSuccess(result.data));
        console.log(result);
        alert(result.statusText);
      })
      .catch((error) => {
        dispatch(actAddUserFailed(error));
        alert(error.data);
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: TypeAction.DASHBOARD_ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: TypeAction.DASHBOARD_ADD_USER_SUCCESS,
    payload: data,
  };
};
const actAddUserFailed = (error) => {
  return {
    type: TypeAction.DASHBOARD_ADD_USER_FAILED,
    payload: error,
  };
};
