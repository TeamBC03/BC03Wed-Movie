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

const CinemaSeatBookingRequest = () => {
  return { type: TypeAction.CINEMA_SEAT_BOOKING_REQUEST };
};
const CinemaSeatBookingSuccess = (data) => {
  return { type: TypeAction.CINEMA_SEAT_BOOKING_SUCCESS, payload: data };
};
const CinemaSeatBookingErr = (err) => {
  return { type: TypeAction.CINEMA_SEAT_BOOKING_FAILED, payload: err };
};

export const CinemaSeatBookingFectch = (dataBooking) => {
  let accessToken = "";
  if (localStorage.getItem("User")) {
    accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
  }
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return (dispatch) => {
    dispatch(CinemaSeatBookingRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: dataBooking,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(CinemaSeatBookingSuccess(result.data));
        console.log(result);

        alert(result.data);
        window.location.assign("/user");
      })
      .catch((err) => {
        dispatch(CinemaSeatBookingErr(err));
      });
  };
};
