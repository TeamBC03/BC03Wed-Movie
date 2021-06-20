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
          <NavLink to="/user">
            <i className="fas fa-user-circle" />
            <span>{JSON.parse(localStorage.getItem("User")).hoTen}</span>
          </NavLink>
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
const EnterPress = (e) => {
  if (e.code === "Enter") {
    console.log("enter roi do");
  }
};
function NavHome(props) {
  return (
    <div className="navContainer">
      <div className="nav-left">
        <img src="./img/logo.png" />
      </div>
      <div className="nav-center">
        <ul>
          <li className="pt-1">
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li className="pt-1">
            <a href="#">Lịch chiếu </a>
          </li>
          <li className="pt-1">
            <a href="#">Cụm rạp </a>
          </li>
          <li className="nav-search">
            <input onKeyPress={EnterPress} />
            <i className="fas fa-search iconSearch" />
          </li>
        </ul>
      </div>
      <div className="nav-right">{renderLogin()}</div>
    </div>
  );
}
export default memo(NavHome);
