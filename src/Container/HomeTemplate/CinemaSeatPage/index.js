import React from "react";
import CinemaSeat from "../../../Components/CinemaSeats/index";
import "./index.css";
export default function CinemaSeatPage() {
  if (localStorage.getItem("User") || localStorage.getItem("UserAdmin")) {
    return (
      <div className="container-cinema-seat">
        <CinemaSeat />
      </div>
    );
  } else {
    window.location.assign("/login");
  }
}
