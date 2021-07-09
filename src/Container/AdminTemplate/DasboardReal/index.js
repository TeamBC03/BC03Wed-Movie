import React from "react";
import "./css.css";
export default function DashBoardReal() {
  return (
    <div className="containerDashBoard">
      <div className="containerDas-item">
        <div className="contentDas">
          <div>
            <h5>PHIM</h5>
            <h4>30VND</h4>
          </div>
          <div>
            <p>Luan</p>
          </div>
        </div>
        <div className="contentDas">
          <div>
            <h5>USER</h5>
            <h4>30VND</h4>
          </div>
          <div>
            <p>luan</p>
          </div>
        </div>
        <div className="contentDas">
          <div>
            <h5>Hệ Thống Rạp</h5>
            <h4>30VND</h4>
          </div>
          <div>
            <p>Luan</p>
          </div>
        </div>
      </div>
      <div>
        <figure className="pie-chart">
          <h5>Thống Kê Tỉ Lệ Suất CHiếu Theo Hệ Thống Rạp</h5>
          <figcaption>
            CGV
            <span style={{ color: "#4e79a7" }} />
            <br />
            BHD-Star
            <span style={{ color: "#f28e2c" }} />
            <br />
            Lotte
            <span style={{ color: "#e15759" }} />
            <br />
            CineStar
            <span style={{ color: "#76b7b2" }} />
            <br />
            Galaxy
            <span style={{ color: "#59a14f" }} />
            <br />
            MegaS
            <span style={{ color: "#edc949" }} />
          </figcaption>
          <cite>Theo Thống Kê 2021</cite>
        </figure>
      </div>
    </div>
  );
}
