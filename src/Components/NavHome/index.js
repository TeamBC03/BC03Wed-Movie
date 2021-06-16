import { render } from "@testing-library/react";
import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css.css";
const renderLogin = () => {
  if (localStorage.getItem("User")) {
    console.log();
    return (
      <ul>
        <li>
          <i className="fas fa-user-circle" />
          <span>{JSON.parse(localStorage.getItem("User")).hoTen}</span>
        </li>
        <li>
          <a onClick={signOut}>Đăng xuất</a>
        </li>
      </ul>
    );
  }

  return (
    <ul>
      <li>
        <NavLink to="/login">Đăng Nhập</NavLink>
      </li>
      <li>
        <NavLink to="/signUp">Đăng Kí</NavLink>
      </li>
    </ul>
  );
};
const signOut = () => {
  localStorage.removeItem("User");
  window.location.reload();
};
function NavHome(props) {
  return (
    <div className="navContainer">
      <div className="nav-left">
        <img src="./img/logo.png" />
      </div>
      <div className="nav-center">
        <ul>
          <li>
            <a href="#">Trang chủ </a>
          </li>
          <li>
            <a href="#">Lịch chiếu </a>
          </li>
          <li>
            <a href="#">Cụm rạp </a>
          </li>
          <li className="nav-search">
            <input /> <i className="fas fa-search" />
          </li>
        </ul>
      </div>
      <div className="nav-right">{renderLogin()}</div>
    </div>
  );
}
export default memo(NavHome);
