import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css.css";
import axios from "axios";
export default function LogInPage(props) {
  const [state, setState] = useState({ taikhoan: "", matkhau: "" });
  const [state1, setState1] = useState({ loading: false });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    setState1({ ...state1, loading: true });
    event.preventDefault();
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: state,
    })
      .then((result) => {
        setState1({ ...state1, loading: true });
        localStorage.setItem("User", JSON.stringify(result.data));
        props.history.replace("/");
      })
      .catch((err) => {
        setState1({ ...state1, loading: true });
        alert("loi roi");
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
    <div className="login">
      <div className="loginContainer-right">
        <h2 className="login-title">ĐĂNG NHẬP</h2>
        <form className="row g-3 formSign" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Tài Khoản :
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTk"
              placeholder="Nhập tài khoản"
              onChange={handleOnChange}
              name="taikhoan"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Mật Khẩu :
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              onChange={handleOnChange}
              name="matkhau"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Ghi nhớ đăng nhập
              </label>
            </div>
          </div>
          <a href="#">Quên mật khẩu ?</a>
          <Link to="/signUp">Tạo tài khoản mới</Link>
          {/* <div className="col-md-6 button-signUp">
            <button type="submit" className="btn btn-primary ">
              Đăng Kí 
            </button>
          </div> */}
          <div className="col-md button-signIn">
            <button type="submit" className="btn btn-primary ">
              Đăng Nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
