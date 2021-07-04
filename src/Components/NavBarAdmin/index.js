import React from "react";
import "./css.css";
export default function NavBarAdmin() {
  return (
    <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
      {/*
  Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

  Tip 2: you can also add an image using data-image tag
    */}
      <div className="sidebar-wrapper">
        <div className="logo">
          <a href="http://www.creative-tim.com" className="simple-text">
            Creative Tim
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <a className="nav-link" href="dashboard.html">
              <i className="nc-icon nc-chart-pie-35" />
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a className="nav-link" href="./user.html">
              <i className="nc-icon nc-circle-09" />
              <p>User Profile</p>
            </a>
          </li>
          <li>
            <a className="nav-link" href="./table.html">
              <i className="nc-icon nc-notes" />
              <p>Table List</p>
            </a>
          </li>
          <li>
            <a className="nav-link" href="./typography.html">
              <i className="nc-icon nc-paper-2" />
              <p>Typography</p>
            </a>
          </li>
          <li>
            <a className="nav-link" href="./icons.html">
              <i className="nc-icon nc-atom" />
              <p>Icons</p>
            </a>
          </li>
          <li>
            <a className="nav-link" href="./maps.html">
              <i className="nc-icon nc-pin-3" />
              <p>Maps</p>
            </a>
          </li>
          <li>
            <a className="nav-link" href="./notifications.html">
              <i className="nc-icon nc-bell-55" />
              <p>Notifications</p>
            </a>
          </li>
          <li className="nav-item active active-pro">
            <a className="nav-link active" href="upgrade.html">
              <i className="nc-icon nc-alien-33" />
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
