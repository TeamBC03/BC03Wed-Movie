import React, { useCallback, useEffect, useState } from "react";
// import "./style.css";
import "./detailFilm.css";
import { connect } from "react-redux";
import { detailMovieFectch } from "./Modules/action";
import {} from "css-percentage-circle";
import DetailTicketMovie from "../../../Components/DetailTicketMovie";
import Loading from "../../../Components/Loading/index";
import filmImage from "./img/film.png"

function DetailMoviePage(props) {
  const [data, setdata] = useState();

  props.fetchDetail(props.match.params.id);

  // useEffect(() => {
  //    setdata()
  // }, []);
  // useEffect(() => {
  //   setdata(props.data);
  //   console.log(data);
  // }, [props.data]);
  if (props.loading) {
    console.log("dang loadding");
    return <Loading />;
  }
  console.log("đã ra");
  return (
    <div className="detailFilm">
      <div className="mainTop">
        <div className="styleBlur" /> 
        <div className="styleGradient" />
        <div className="content d-flex">
          <div className="col-md-3 content-image">
            <img src={props.data.hinhAnh} className="w-100 h-100" />
          </div>
          <div className="col-md-5 content-film">
            <div className="content-date">
              <span>16.04.2021</span>
            </div>
            <div className="content-name">
              <span className="content-name__age">C18</span>
              <span className="content-name__name">{props.data.tenPhim} </span>
            </div>
            <div className="content-time">
              <span>100 phút - 0 IMDb - 2D/Digital</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBottom">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="lichChieu-tab"
              data-bs-toggle="tab"
              data-bs-target="#lichChieu"
              type="button"
              role="tab"
              aria-controls="lichChieu"
              aria-selected="true"
            >
              Lịch Chiếu
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link "
              id="thongTin-tab"
              data-bs-toggle="tab"
              data-bs-target="#thongTin"
              type="button"
              role="tab"
              aria-controls="thongTin"
              aria-selected="false"
            >
              Thông Tin
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="danhGia-tab"
              data-bs-toggle="tab"
              data-bs-target="#danhGia"
              type="button"
              role="tab"
              aria-controls="danhGia"
              aria-selected="false"
            >
              Đánh Giá
            </button>
          </li>
        </ul>
        <div className="container-fluid tab-content__background">
          <div className="tab-content tab-content__main" id="myTabContent">
            {" "}
            <div
              class="tab-pane fade show active"
              id="lichChieu"
              role="tabpanel"
              aria-labelledby="lichChieu-tab"
            >
              <div class="d-flex align-items-start detailCinema__lichChieu">
                <div
                  class="nav flex-column nav-tabs col-md-4 cinemaList"
                  id="nav-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <div class="cinemaItem d-flex">
                      <div class="cinemaItem-img">
                        <img src="img/bhd-star-bitexco.png" />
                      </div>
                      <div class="cinemaItem-content">
                        <span class="cinemaItem-content__name">
                          BHD Star Bitexco
                        </span>
                        <span class="cinemaItem-content__address">
                          L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                        </span>
                      </div>
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <div class="cinemaItem d-flex">
                      <div class="cinemaItem-img">
                        <img src="img/bhd-star-bitexco.png" />
                      </div>
                      <div class="cinemaItem-content">
                        <span class="cinemaItem-content__name">
                          BHD Star Bitexco
                        </span>
                        <span class="cinemaItem-content__address">
                          L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                        </span>
                      </div>
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="nav-messages-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-messages"
                    type="button"
                    role="tab"
                    aria-controls="nav-messages"
                    aria-selected="false"
                  >
                    <div class="cinemaItem d-flex">
                      <div class="cinemaItem-img">
                        <img src="img/bhd-star-bitexco.png" />
                      </div>
                      <div class="cinemaItem-content">
                        <span class="cinemaItem-content__name">
                          BHD Star Bitexco
                        </span>
                        <span class="cinemaItem-content__address">
                          L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                        </span>
                      </div>
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="nav-settings-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-settings"
                    type="button"
                    role="tab"
                    aria-controls="nav-settings"
                    aria-selected="false"
                  >
                    <div class="cinemaItem d-flex">
                      <div class="cinemaItem-img">
                        <img src="img/bhd-star-bitexco.png" />
                      </div>
                      <div class="cinemaItem-content">
                        <span class="cinemaItem-content__name">
                          BHD Star Bitexco
                        </span>
                        <span class="cinemaItem-content__address">
                          L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
                <div class="tab-content col-md-8" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <nav>
                      <div
                        class="nav nav-tabs listDayTime"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          class="nav-link active"
                          id="nav-mon-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-mon"
                          type="button"
                          role="tab"
                          aria-controls="nav-mon"
                          aria-selected="true"
                        >
                          <p class="day">Thứ 2</p>
                          <p class="date">01</p>
                        </button>
                        <button
                          class="nav-link"
                          id="nav-tue-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-tue"
                          type="button"
                          role="tab"
                          aria-controls="nav-tue"
                          aria-selected="false"
                        >
                          <p class="day">Thứ 3</p>
                          <p class="date">02</p>
                        </button>
                        <button
                          class="nav-link"
                          id="nav-wed-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-wed"
                          type="button"
                          role="tab"
                          aria-controls="nav-wed"
                          aria-selected="false"
                        >
                          <p class="day">Thứ 4</p>
                          <p class="date">03</p>
                        </button>
                        <button
                          class="nav-link"
                          id="nav-thu-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-thu"
                          type="button"
                          role="tab"
                          aria-controls="nav-thu"
                          aria-selected="false"
                        >
                          <p class="day">Thứ 5</p>
                          <p class="date">04</p>
                        </button>
                        <button
                          class="nav-link"
                          id="nav-fri-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-fri"
                          type="button"
                          role="tab"
                          aria-controls="nav-fri"
                          aria-selected="false"
                        >
                          <p class="day">Thứ 6</p>
                          <p class="date">05</p>
                        </button>
                        <button
                          class="nav-link"
                          id="nav-sat-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-sat"
                          type="button"
                          role="tab"
                          aria-controls="nav-sat"
                          aria-selected="false"
                        >
                          <p class="day">Thứ 7</p>
                          <p class="date">06</p>
                        </button>
                        <button
                          class="nav-link"
                          id="nav-sun-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-sun"
                          type="button"
                          role="tab"
                          aria-controls="nav-sun"
                          aria-selected="false"
                        >
                          <p class="day">Chủ Nhật</p>
                          <p class="date">07</p>
                        </button>
                      </div>
                    </nav>
                    <div class="tab-content list-suatChieu" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-mon"
                        role="tabpanel"
                        aria-labelledby="nav-mon-tab"
                      >
                        Không có suất chiếu
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-tue"
                        role="tabpanel"
                        aria-labelledby="nav-tue-tab"
                      >
                        Không có suất chiếu
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-wed"
                        role="tabpanel"
                        aria-labelledby="nav-wed-tab"
                      >
                        Không có suất chiếu
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-thu"
                        role="tabpanel"
                        aria-labelledby="nav-thu-tab"
                      >
                        Không có suất chiếu
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-fri"
                        role="tabpanel"
                        aria-labelledby="nav-fri-tab"
                      >
                        Không có suất chiếu
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-sat"
                        role="tabpanel"
                        aria-labelledby="nav-sat-tab"
                      >
                        Không có suất chiếu
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-sun"
                        role="tabpanel"
                        aria-labelledby="nav-sun-tab"
                      >
                        Không có suất chiếu
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    ...
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-messages"
                    role="tabpanel"
                    aria-labelledby="nav-messages-tab"
                  >
                    ...
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-settings"
                    role="tabpanel"
                    aria-labelledby="nav-settings-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade "
              id="thongTin"
              role="tabpanel"
              aria-labelledby="thongTin-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className=" thongTin-left">
                    <p className="thongTin-title">Ngày công chiếu</p>
                    <p className="thongTin-info">16.04.2021</p>
                  </div>
                  <div className=" thongTin-left">
                    <p className="thongTin-title">Đạo diễn</p>
                    <p className="thongTin-info">Lý Hải</p>
                  </div>
                  <div className=" thongTin-left">
                    <p className="thongTin-title">Diễn viên</p>
                    <p className="thongTin-info">
                      Tiết Cương, Huỳnh Đông, Mạc Văn Khoa, Ốc Thanh Vân
                    </p>
                  </div>
                  <div className=" thongTin-left">
                    <p className="thongTin-title">Thể loại</p>
                    <p className="thongTin-info">Hành động</p>
                  </div>
                  <div className=" thongTin-left">
                    <p className="thongTin-title">Định dạng</p>
                    <p className="thongTin-info">2D/Digital</p>
                  </div>
                  <div className="s thongTin-left">
                    <p className="thongTin-title">Quốc gia SX</p>
                    <p className="thongTin-info">Việt Nam</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="fw-bold">Nội dung</p>
                  <span>{props.data.moTa}</span>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="danhGia"
              role="tabpanel"
              aria-labelledby="danhGia-tab"
            >
              <div className="detailReviewer">
                <div className="yourRating blockReviewer">
                  <span className="imgReviewer">
                    <img src="img/avatar.png" />
                  </span>
                  <input
                    className="inputReviewer"
                    type="text"
                    placeholder="Bạn nghĩ gì về phim này ?"
                  />
                  <span className="starReviewer">
                    <img src="img/listStar.png" />
                  </span>
                </div>
                <div className="listReview">
                  <div className="blockReviewer blockReviewerComment">
                    <div className="reviewerComment">
                      <div className="mainInfo">
                        <div className="infoReview">
                          <div className="infoReviewIcon">
                            <img src="img/avatar.png" />
                          </div>
                          <div className="infoReviewName">
                            <p className="infoReviewName__name">Member</p>
                            <p className="infoReviewName__day">1 ngày trước</p>
                          </div>
                        </div>
                        <div className="infoRating">
                          <div className="infoRatingMark">9</div>
                          <div className="infoRatingStar">
                            <img src="img/star.png" />
                            <img src="img/star.png" />
                            <img src="img/star.png" />
                            <img src="img/star.png" />
                            <img src="img/star.png" />
                          </div>
                        </div>
                      </div>
                      <div className="mainComment">Hay</div>
                      <div className="likeComment">
                        <div className="likeComment__like">
                          <img src="img/like.png" />
                          <span>1 thích</span>
                        </div>
                      </div>
                    </div>
                    <div className="listComment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fix-background container-fluid" />
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
