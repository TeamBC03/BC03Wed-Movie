import React, { useState } from "react";
import "./css.css";
import axios from "axios";
export default function SignUp() {
  const [state, setState] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDT: "",
    matKhau: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    let mk = document.getElementById("inputPassword2").value;
    if (state.matKhau === mk) {
      axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: state,
      })
        .then((result) => {
          alert("Tạo Thành Công , Mời Đăng nhập");
          console.log(result);
          window.location.assign("/login");
        })
        .catch((err) => {
          alert(err.response.data);

          console.log(err);
        });
    } else {
      alert("Mật khẩu nhập lại không khớp");
    }
  };
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  return (
    <div className="signUp">
      <div className="signUpContainer-right">
        <h2 className="signUp-title">ĐĂNG KÍ</h2>
        <form className="row g-3 formSign" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Tài Khoản :
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTk"
              onChange={handleOnchange}
              name="taiKhoan"
              placeholder="Nhập tài khoản"
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
              onChange={handleOnchange}
              name="matKhau"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Nhập Lại Mật Khẩu :
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Họ Tên :
            </label>
            <input
              type="text"
              className="form-control"
              id="inputHt"
              placeholder="Nhập họ tên"
              onChange={handleOnchange}
              name="hoTen"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              onChange={handleOnchange}
              name="email"
              placeholder="Nhập email"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputCity" className="form-label">
              SDT :
            </label>
            <input
              type="number"
              className="form-control"
              id="inputSdt"
              onChange={handleOnchange}
              name="soDT"
              placeholder="Nhập SĐT"
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
                Chấp Nhận Điều Khoản
              </label>
            </div>
          </div>
          <div className="col-md-6 button-signUp">
            <button type="submit" className="btn btn-primary ">
              Đăng Kí
            </button>
          </div>
          <div className="col-md-6 button-signIn">
            <button type="submit" className="btn btn-primary ">
              Đăng Nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
