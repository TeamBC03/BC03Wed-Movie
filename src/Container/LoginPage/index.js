import React, { useCallback, useState, useEffect } from "react";
import "./css.css";
import axios from "axios";
export default function LogInPage(props) {
  const [state, setState] = useState({ taikhoan: "", matkhau: "" });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: state,
    })
      .then((result) => {
        localStorage.setItem("User", JSON.stringify(result.data));
        props.history.replace("/");

        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadLogin = () => {
    if (localStorage.getItem("User")) {
      props.history.replace("/");
    }
  };
  loadLogin();
  return (
    <div className="signUp">
      <div className="signUpContainer-right">
        <h2>Đăng Nhập</h2>
        <form className="row g-3 formSign" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Tài Khoản
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTk"
              placeholder="Apartment, studio, or floor"
              onChange={handleOnChange}
              name="taikhoan"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Mật Khẩu
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              onChange={handleOnChange}
              name="matkhau"
            />
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">
              Đăng Nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
