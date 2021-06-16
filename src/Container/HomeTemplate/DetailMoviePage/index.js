import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import { detailMovieFectch } from "./Modules/action";
import {} from "css-percentage-circle";
import DetailTicketMovie from "../../../Components/DetailTicketMovie";
function DetailMoviePage(props) {
  const [data, setdata] = useState();
  useEffect(() => {
    props.fetchDetail(props.match.params.id);
  }, []);
  // useEffect(() => {
  //    setdata()
  // }, []);
  // useEffect(() => {
  //   setdata(props.data);
  //   console.log(data);
  // }, [props.data]);
  if (props.loading) {
    return <div>Đang Loading</div>;
  }

  return (
    <div className="DetailMovieContainer">
      <div className="DetailMovieContainer-top">
        <img src={props.data.hinhAnh} />
        <div className="DetailMovieContainer-top-content">
          <div className="DetailMovieContainer-top-content-left">
            <img src={props.data.hinhAnh} />
            <div className="detailContentMovie">
              <p>30.4.2021</p>
              <h4>{props.data.tenPhim}</h4>
              <p>100 phút - 0 IMDb - 2D/Digital</p>
              <button className="btn btn-danger">Mua vé</button>
            </div>
          </div>
          <div className="DetailMovieContainer-top-content-right"></div>
        </div>
      </div>
      <div className="DetailMovieContainer-centerLinear" />
      <div className="DetailMovieContainer-bot">
        <ul
          class="nav nav-pills mb-3 ulTabContainerBot"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>
        <div class="tab-content tabContentContainer" id="pills-tabContent">
          <div
            class="tab-pane fade show active tabItem"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <DetailTicketMovie
              listDateMovie={props.data.lichChieu}
              // listTheater={props.dataThe}
            />
          </div>
          <div
            class="tab-pane fade tabItem"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="content">
              <div className="DetailMovieContainer-bot-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row rowleft">
                      <p>Ngày Công Chiếu</p>
                      <p>30.4.2021</p>
                    </div>
                    <div className="row rowleft">
                      <p>Đạo diễn</p>
                      <p>Võ Thành Luân</p>
                    </div>
                    <div className="row rowleft">
                      <p>Diễn Viên</p>
                      <p>Võ Thành Luân</p>
                    </div>
                    <div className="row rowleft">
                      <p>Thể Loại</p>
                      <p>Võ Thành Luân</p>
                    </div>
                    <div className="row rowleft">
                      <p>Định Dạng</p>
                      <p>Võ Thành Luân</p>
                    </div>
                    <div className="row rowleft">
                      <p>Quốc Gia</p>
                      <p>Võ Thành Luân</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row contentNd">
                      <p>Nội Dung</p>
                      <p>{props.data.moTa}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade tabItem"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetail: (id) => {
      dispatch(detailMovieFectch(id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.DetailMovie.loading,
    data: state.DetailMovie.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
