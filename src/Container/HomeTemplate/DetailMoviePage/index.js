import React, { useCallback, useEffect, useState } from "react";
import "./detailFilm.css";
import { connect } from "react-redux";
import { detailMovieFectch } from "./Modules/action";
import {} from "css-percentage-circle";
import DetailTicketMovie from "../../../Components/DetailTicketMovie";
import Loading from "../../../Components/Loading/index";
import filmImage from "./img/film.png";
import logo from "./img/logo-cinema.png";
import avatar from "./img/avatar.png";
import listStar from "./img/listStar.png";
import star from "./img/star.png";
import like from "./img/like.png";

function DetailMoviePage(props) {
  const [state, setState] = useState({ dataRap: null });
  const [state1, setState1] = useState({ dataLichChieu: [] });
  const tomorrow = new Date();
  const mapmap = [0, 1, 2, 3, 4, 5, 6];
  tomorrow.setDate(tomorrow.getDate() - 1);
  const getDatee = () => {
    return mapmap.map((item, i) => {
      let day = "";
      console.log(tomorrow.getDay());
      tomorrow.setDate(tomorrow.getDate() + 1);
      const days = tomorrow.getDate();
      switch (tomorrow.getDay()) {
        case 0: {
          day = "Chủ Nhật";
          break;
        }
        case 1: {
          day = "Thứ 2";
          break;
        }
        case 2: {
          day = "Thứ 3";
          break;
        }
        case 3: {
          day = "Thứ 4";
          break;
        }
        case 4: {
          day = "Thứ 5";
          break;
        }
        case 5: {
          day = "Thứ 6";
          break;
        }
        case 6: {
          day = "Thứ 7";
          break;
        }
        default:
          break;
      }
      return (
        <button
          class="nav-link btnday"
          id="nav-mon-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-mon"
          type="button"
          role="tab"
          aria-controls="nav-mon"
          aria-selected="true"
          onClick={() => {
            renderLichChieuNgay(days);
          }}
        >
          <p class="day">{day}</p>
          <p class="date">{tomorrow.getDate()}</p>
        </button>
      );
    });
  };
  const LichChieu = async (cumrap) => {
    console.log(cumrap);
    let dataRap1 = props.data.heThongRapChieu.filter((item) => {
      return item.maHeThongRap === cumrap;
    });
    setState({ ...state, dataRap: dataRap1 });
    let btn = document.querySelectorAll(".btnday");
    btn[0].click();
  };

  const renderLichChieuNgay = (day) => {
    console.log("Ngày", day);
    let dataLichChieu1 = [];
    if (state.dataRap !== null) {
      state.dataRap[0].cumRapChieu.forEach((item) => {
        let suatchieu = item.lichChieuPhim.filter((lichchieu) => {
          const moonLanding = new Date(lichchieu.ngayChieuGioChieu);
          const daynow = new Date();
          return (
            moonLanding.getFullYear() === daynow.getFullYear() &&
            moonLanding.getMonth() === daynow.getMonth() &&
            moonLanding.getDate() === day
          );
        });
        let suatchieuRap = { tenCumrap: item.tenCumRap, suatchieu: suatchieu };
        if (suatchieuRap.suatchieu.length != 0) {
          dataLichChieu1.push(suatchieuRap);
        }
      });
      console.log(dataLichChieu1);
      setState1({ ...state1, dataLichChieu: dataLichChieu1 });
    }
  };
  const renderListLichChieu = (suatchieu) => {
    return suatchieu.map((item) => {
      return (
        <div className="suatChieu-item__time col-md-2">
          {`${new Date(item.ngayChieuGioChieu).getHours()}:${new Date(
            item.ngayChieuGioChieu
          ).getMinutes()}`}
        </div>
      );
    });
  };
  const renderLichChieuNgay1 = () => {
    if (state1.dataLichChieu.length === 0) {
      return <div>Không có suất chiếu trong ngày</div>;
    } else {
      return state1.dataLichChieu.map((item) => {
        return (
          <div className="suatChieu-item">
            <div className="suatChieu-item__cinema d-flex">
              <div className="suatChieu-item__image">
                <img src={logo} />
              </div>
              <div className="suatChieu-item__info">
                <p className="suatChieu-item__name">{item.tenCumrap}</p>
                {/* <p className="suatChieu-item__address">116 Nguyễn Du, Q.1</p> */}
              </div>
            </div>
            <div className="suatChieu-item__lichChieu d-flex">
              {renderListLichChieu(item.suatchieu)}
            </div>
          </div>
        );
      });
    }
  };
  useEffect(() => {
    props.fetchDetail(props.match.params.id);
  }, []);

  console.log("loading", props.loading);
  if (props.loading) {
    return <Loading />;
  }
  const renderCinema = () => {
    return props.data.heThongRapChieu.map((item) => {
      console.log(item);
      return (
        <button
          class="nav-link"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          onClick={() => {
            LichChieu(item.maHeThongRap);
          }}
        >
          <div class="cinemaItem d-flex">
            <div class="cinemaItem-img">
              <img src={item.logo} />
            </div>
            <div class="cinemaItem-name">
              <span>{item.tenHeThongRap}</span>
            </div>
          </div>
        </button>
      );
    });
  };

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
              <span>`100 phút {props.data.danhGia}-SAO - 2D/Digital`</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBottom">
        <ul className="nav nav-tabs nav-tabs__main" id="myTab" role="tablist">
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
                  class="nav flex-column nav-tabs col-md-4 cinemaList detailCinema__lichChieu-left"
                  id="nav-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {renderCinema()}
                </div>
                <div
                  class="tab-content col-md-8 detailCinema__lichChieu-right"
                  id="nav-tabContent"
                >
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
                        {getDatee()}
                      </div>
                    </nav>
                    <div class="tab-content suatChieu-list" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-mon"
                        role="tabpanel"
                        aria-labelledby="nav-mon-tab"
                      >
                        {renderLichChieuNgay1()}
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
                    <img src={avatar} />
                  </span>
                  <input
                    className="inputReviewer"
                    type="text"
                    placeholder="Bạn nghĩ gì về phim này ?"
                  />
                  <span className="starReviewer">
                    <img src={listStar} />
                  </span>
                </div>
                <div className="listReview">
                  <div className="blockReviewer blockReviewerComment">
                    <div className="reviewerComment">
                      <div className="mainInfo">
                        <div className="infoReview">
                          <div className="infoReviewIcon">
                            <img src={avatar} />
                          </div>
                          <div className="infoReviewName">
                            <p className="infoReviewName__name">Member</p>
                            <p className="infoReviewName__day">1 ngày trước</p>
                          </div>
                        </div>
                        <div className="infoRating">
                          <div className="infoRatingMark">9</div>
                          <div className="infoRatingStar">
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                          </div>
                        </div>
                      </div>
                      <div className="mainComment">Hay</div>
                      <div className="likeComment">
                        <div className="likeComment__like">
                          <img src={like} />

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
