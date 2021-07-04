import React from "react";
import "./css.css";
export default function NavBarAdmin() {
  return (
    <div className="sidebar" data-image="./assets/img/sidebar-5.jpg">
      {/*
  Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

  Tip 2: you can also add an image using data-image tag
    */}
      <div className="sidebar-wrapper">
        <div className="logo">
          <a
            href="https://www.facebook.com/vothanhluan2907/"
            className="simple-text"
          >
            ADMIN BOARD
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <a className="nav-link" href="./index.html">
              <i className="nc-icon nc-notes" />
              <p>Table List</p>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="./index1.html">
              <i className="nc-icon nc-notes" />
              <p>QUẢN LÍ ẢNH</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
