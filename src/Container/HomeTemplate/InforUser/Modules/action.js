import * as TypeAction from "./constants";
import axios from "axios";

const InfoRequest = () => {
  return { type: TypeAction.INFO_REQUEST };
};
const InfoSuccess = (data) => {
  return { type: TypeAction.INFO_SUCCESS, payload: data };
};
const InfoErr = (err) => {
  return { type: TypeAction.INFO_FAILED, payload: err };
};

export const InfoFectch = (tenTk) => {
  return (dispatch) => {
    dispatch(InfoRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: {
        taiKhoan: tenTk,
      },
    })
      .then((result) => {
        dispatch(InfoSuccess(result.data));
        console.log(result);
      })
      .catch((err) => {
        dispatch(InfoErr(err));
      });
  };
};
const InfoChangeRequest = () => {
  return { type: TypeAction.INFO_CHANGE_REQUEST };
};
const InfoChangeSuccess = (data) => {
  return { type: TypeAction.INFO_CHANGE_SUCCESS, payload: data };
};
const InfoChangeErr = (err) => {
  return { type: TypeAction.INFO_CHANGE_FAILED, payload: err };
};

export const InfoChangeFectch = (data) => {
  let accessToken = "";
  if (localStorage.getItem("User")) {
    accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
  }
  return (dispatch) => {
    dispatch(InfoChangeRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(InfoChangeSuccess(result.data));
        if (result.statusText === "OK") {
          alert("Cập Nhật Thành Công");
          console.log("Thanh cong", result);

          window.location.reload();
        } else {
          alert("Cập Nhật Không Thành Công :" + result.statusText);
        }
      })
      .catch((err) => {
        dispatch(InfoChangeErr(err));
        console.log(err);
      });
  };
};
