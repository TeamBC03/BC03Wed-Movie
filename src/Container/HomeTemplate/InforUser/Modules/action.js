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
