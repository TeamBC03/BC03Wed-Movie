import * as ActionType from "./constants";
import axios from "axios";

export const fetchLoginAuth = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        // check maLoaiNguoiDung => QuanTri => Chuyển hướng
        // maLoaiNguoiDung === "KhachHang" return về catch()
        console.log(result.data);
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem("User", JSON.stringify(result.data));
          history.replace("/");
        }

        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
          history.replace("/dashboard");
        }

        dispatch(actAuthSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actAuthFailed(error));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (error) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: error,
  };
};
