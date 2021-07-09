import * as TypeAction from "./constants";
import axios from "axios";
const DashboardFilmRequest = () => {
  return { type: TypeAction.MANAGER_REQUEST };
};
const DashboardFilmSuccess = (data) => {
  return { type: TypeAction.MANAGER_SUCCESS, payload: data };
};
const DashboardFilmErr = (err) => {
  return { type: TypeAction.MANAGER_FAILED, payload: err };
};

export const DashboardFilmFectch = () => {
  return (dispatch) => {
    dispatch(DashboardFilmRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        axios({
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
          method: "GET",
        })
          .then((result1) => {
            dispatch(
              DashboardFilmSuccess({
                dataFilm: result.data,
                dataUser: result1.data,
              })
            );
            console.log(result1);
          })
          .catch((err) => {
            dispatch(DashboardFilmErr(err));
          });

        console.log(result);
      })
      .catch((err) => {
        dispatch(DashboardFilmErr(err));
        alert(err.response.data);
      });
  };
};
