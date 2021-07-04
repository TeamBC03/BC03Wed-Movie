import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import "./css.css";
import { fetchLoginAuth } from "./modules/actions";
export default function LogInPage(props) {
  if (localStorage.getItem("User") || localStorage.getItem("UserAdmin")) {
    props.history.replace("/");
  }
  const [state, setState] = useState({ taikhoan: "", matkhau: "" });
  const loading = useSelector((state) => state.LoginReducer.loading);
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchLoginAuth(state, props.history));
  };
  if (loading) {
    return <Loading />;
  }
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
