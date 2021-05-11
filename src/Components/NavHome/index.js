import React, { memo } from "react";
import "./css.css";
function NavHome() {
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
      <div className="nav-right">
        <ul>
          <li>
            <i className="fas fa-user-circle" />
            <a>Đăng Nhập </a>
          </li>
          <li>
            <i className="fas fa-user-circle" />
            <a>ĐĂNG KÍ </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default memo(NavHome);
