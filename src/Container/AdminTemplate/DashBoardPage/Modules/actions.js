import * as TypeAction from "./constants";
import axios from "axios";
import { useDispatch } from "react-redux";
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
        alert(err.response.data);
      });
  };
};
const DashboardDateFilmRequest = () => {
  return { type: TypeAction.DASHBOARD_DATE_FILM_REQUEST };
};
const DashboardDateFilmSuccess = (data) => {
  return { type: TypeAction.DASHBOARD_DATE_FILM_SUCCESS, payload: data };
};
const DashboardDateFilmErr = (err) => {
  return { type: TypeAction.DASHBOARD_DATE_FILM_FAILED, payload: err };
};

export const DashboardDateFilmFectch = (maPhim, callback) => {
  return (dispatch) => {
    dispatch(DashboardDateFilmRequest());

    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=" +
        maPhim,
      method: "GET",
    })
      .then((result) => {
        dispatch(DashboardDateFilmSuccess(result.data));

        console.log(result.data);
      })
      .catch((err) => {
        dispatch(DashboardDateFilmErr(err));
      });
  };
};
const DashboardCinemaFilmRequest = () => {
  return { type: TypeAction.DASHBOARD_CINEMA_FILM_REQUEST };
};
const DashboardCinemaFilmSuccess = (data) => {
  return { type: TypeAction.DASHBOARD_CINEMA_FILM_SUCCESS, payload: data };
};
const DashboardCinemaFilmErr = (err) => {
  return { type: TypeAction.DASHBOARD_CINEMA_FILM_FAILED, payload: err };
};

export const DashboarCinemaFilmFectch = (marap) => {
  return (dispatch) => {
    dispatch(DashboardCinemaFilmRequest());

    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=" +
        marap,
      method: "GET",
    })
      .then((result) => {
        dispatch(DashboardCinemaFilmSuccess(result.data));

        console.log(result.data);
      })
      .catch((err) => {
        dispatch(DashboardCinemaFilmErr(err));
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
        window.location.reload();
      })
      .catch((error) => {
        dispatch(actAddUserFailed(error));

        alert(error);
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
export const DashboardDeleteUser = (taiKhoan, callback) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=" +
      taiKhoan,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((result) => {
      console.log(result.data);
      callback();
      alert(result.data);
    })
    .catch((error) => {
      alert(error.response.data);
    });
};
export const DashboardAddCinema = (lichchieu) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  axios({
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
    method: "POST",
    data: lichchieu,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((result) => {
      console.log(result.data);
      alert(result.data);
    })
    .catch((error) => {
      alert(error.response.data);
    });
};
export const DashboardDeleteFilm = (maPhim) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=" +
      maPhim,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((result) => {
      console.log(result.data);
      alert(result.data);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data);
    });
};
export const DashboardEditUser = (user, callback) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  axios({
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    method: "PUT",
    data: user,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((result) => {
      console.log(result.data);
      if (result.data) {
        alert("Thành Công");
        callback();
      } else {
        alert(result);
      }
    })
    .catch((error) => {
      console.log();
      alert(error.response.data);
    });
};
export const DashboardEditFilm = (phim) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  axios({
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
    method: "POST",
    data: phim,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((result) => {
      console.log(result.data);
      if (result.data) {
        alert("Thành Công");
        window.location.reload();
      } else {
        alert(result);
      }
    })
    .catch((error) => {
      console.log();
      alert(error.response.data);
    });
};
export const DashBoardAddfilm = (form_data) => {
  axios({
    url: "http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh",
    method: "POST",
    data: form_data,
  })
    .then((res) => {
      console.log(res);
      alert(res);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err.response.data);
      alert(err.response.data);
    });
};
