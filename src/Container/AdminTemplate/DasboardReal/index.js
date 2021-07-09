import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css.css";
import { DashboardFilmFectch } from "./modules/action";
import Loading from "../../../Components/Loading";
export default function DashBoardPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.DashBoardReducer.loading);
  const data = useSelector((state) => state.DashBoardReducer.data);

  useEffect(() => {
    dispatch(DashboardFilmFectch());
  }, []);
  console.log(data);
  if (loading) {
    return <Loading />;
  }

  //   let datasort = data.dataFilm.
  return (
    <div className="containerDashBoard">
      <div className="containerDas-item">
        <div className="contentDas">
          <div>
            <h8>PHIM</h8>
            <h4>{data.dataFilm.length}</h4>
          </div>
          <div>
            <i class="fas fa-video"></i>
          </div>
        </div>
        <div className="contentDas">
          <div>
            <h8>USER</h8>
            <h4>{data.dataUser.length}</h4>
          </div>
          <div>
            <i class="fas fa-users"></i>
          </div>
        </div>
        <div className="contentDas">
          <div>
            <h8>Hệ Thống Rạp</h8>
            <h4>6</h4>
          </div>
          <div>
            <i class="fas fa-film"></i>
          </div>
        </div>
      </div>
      <div className="containerChart">
        <div className="chartLeft">
          <figure className="pie-chart">
            <h5>Thống Kê Tỉ Lệ Suất Chiếu Theo Hệ Thống Rạp</h5>
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
        <div className="chartLeft">
          <figure className="pie-chart">
            <h5>Thống Kê Tỉ Lệ Suất Chiếu Theo Hệ Thống Rạp</h5>
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
    </div>
  );
}
