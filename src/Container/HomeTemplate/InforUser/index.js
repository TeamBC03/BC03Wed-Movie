import React, { useEffect } from "react";

export default function InfoUser(props) {
  if (!localStorage.getItem("User")) {
    props.history.replace("/");
    console.log("effet");
    return <div></div>;
  }
  return (
    <div className="row ">
      {console.log("render")}
      <div className="row">
        <div className="row">
          <p className="col-md-3">Tài Khoản</p>
          <p className="col-md-3">
            {JSON.parse(localStorage.getItem("User")).taiKhoan}
          </p>
        </div>
        <p className="col-md-3">Họ và tên</p>
        <p className="col-md-3">
          {JSON.parse(localStorage.getItem("User")).hoTen}
        </p>
      </div>
      <div className="row">
        <p className="col-md-3">Email</p>
        <p className="col-md-3">
          {JSON.parse(localStorage.getItem("User")).email}
        </p>
      </div>
      <div className="row">
        <p className="col-md-3">Số Điện Thoại </p>
        <p className="col-md-3">
          {JSON.parse(localStorage.getItem("User")).soDT}
        </p>
      </div>

      <div className="row">
        <p className="col-md-3">Họ và tên</p>
        <p className="col-md-3">Họ và tên</p>
      </div>
      <div className="row">
        <p className="col-md-3">Họ và tên</p>
        <p className="col-md-3">Họ và tên</p>
      </div>
    </div>
  );
}
