import * as TypeAction from "./constant";
import axios from "axios";
import { result } from "lodash";

const Film_Request = () => {
  return {
    type: TypeAction.FILM_HOME_REQUEST,
  };
};
const Film_Success = (data) => {
  return { type: TypeAction.FILM_HOME_SUCCESS, payload: data };
};
const Film_Err = (err) => {
  return { type: TypeAction.FILM_HOME_FAILED, payload: err };
};

export const Film_Fetch = () => {
  return (dispatch) => {
    dispatch(Film_Request);
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        dispatch(Film_Success(result.data));
      })
      .catch((err) => {
        dispatch(Film_Err(err));
      });
  };
};
