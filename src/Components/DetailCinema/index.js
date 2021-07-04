import React from "react";
import "./detailCinema.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function DetailCinema(props) {
  const tomorrow = new Date();
  const [state, setState] = useState({ dataRap: [] });
  const [state1, setState1] = useState({ dataLichChieu: [] });
  const days = [];
  for (let i = 0; i < 7; i++) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + i);
    let day = "";
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
    days.push(day);
  }
  console.log("data ne", props.dataList.data);
  const renderLichChieu = (day) => {
    console.log(day);
    let dataLichChieu1 = [];
    if (state.dataRap.length != 0) {
      state.dataRap.forEach((item) => {
        let suatchieu = item.lstLichChieuTheoPhim.filter((lichchieu) => {
          const moonLanding = new Date(lichchieu.ngayChieuGioChieu);
          const daynow = new Date();
          return (
            moonLanding.getFullYear() === daynow.getFullYear() &&
            moonLanding.getMonth() === daynow.getMonth() &&
            moonLanding.getDate() === day
          );
        });
        let suatchieurap = {
          hinhAnh: item.hinhAnh,
          tenPhim: item.tenPhim,
          maPhim: item.maPhim,
          suatchieu: suatchieu,
        };
        if (suatchieurap.suatchieu.length != 0) {
          dataLichChieu1.push(suatchieurap);
        }
      });
      console.log(dataLichChieu1);
      setState1({ ...state1, dataLichChieu: dataLichChieu1 });
    }
  };
  const listCinema = () => {
    return props.dataList.data[0].lstCumRap.map((item) => {
      return (
        <button
          class="nav-link active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          onClick={() => {
            ClickCinemaSys(item);
          }}
        >
          <div class="cinemaItem d-flex">
            <div class="cinemaItem-img">
              <img src="img/bhd-star-bitexco.png" />
            </div>
            <div class="cinemaItem-content">
              <span class="cinemaItem-content__name">{item.tenCumRap}</span>
              <span class="cinemaItem-content__address">{item.diaChi}</span>
            </div>
          </div>
        </button>
      );
    });
  };
  const ClickCinemaSys = (dataList) => {
    setState({ ...state, dataRap: dataList.danhSachPhim });
    console.log(dataList.danhSachPhim);
    // if (!loadingSys) {
    //   let btn = document.querySelectorAll(".fibtn");
    //   btn[0].click();
    // }
  };
  const dataHeader = props.dataList.data[0].lstCumRap.filter((item) => {
    return item.maCumRap === props.dataList.marap;
  });
  const renderLichChieu1 = () => {
    if (state1.dataLichChieu.length == 0) {
      return <div>Không có Suất Chiếu</div>;
    } else {
      return state1.dataLichChieu.map((item) => {
        return (
          <div className="suatChieu-item">
            <div className="suatChieu-item__cinema d-flex">
              <div className="suatChieu-item__image">
                <img src={item.hinhAnh} />
              </div>
              <div className="suatChieu-item__info">
                <p className="suatChieu-item__name">{item.tenPhim}</p>
              </div>
            </div>
            <div className="suatChieu-item__lichChieu d-flex">
              {item.suatchieu.map((item1) => {
                return (
                  <div className="suatChieu-item__time col-md-2 col-4">
                    <Link to={`/CinemaSeat/${item1.maLichChieu}`}>
                      {" "}
                      {`${new Date(
                        item1.ngayChieuGioChieu
                      ).getHours()}:${new Date(
                        item1.ngayChieuGioChieu
                      ).getMinutes()}`}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      });
    }
  };
  console.log(dataHeader);
  return (
    <div>
      <div className="detailCinema">
        <div class="mainTop">
          <div class="styleBlur"></div>
          <div class="styleGradient"></div>
          <div class="content d-flex">
            <div class="col-md-3 content-image">
              <img src="./img/bhd-star-bitexco.png " class="w-100" />
            </div>
            <div class="col-md-5 contentCinema">
              {/* <!-- <div class="content-date">
              <span>16.04.2021</span>
            </div>
            <div class="content-name">
              <span class="content-name__age">C18</span>
              <span class="content-name__name">Lật Mặt : 48h </span>
            </div>
            <div class="content-time">
              <span>100 phút - 0 IMDb - 2D/Digital</span>
            </div> --> */}
              <div class="contentCinema__name">{dataHeader[0].tenCumRap}</div>
              <div class="contentCinema__address">{dataHeader[0].diaChi}</div>
              <div class="contentCinema__button">
                <button>Mua vé</button>
              </div>
            </div>
          </div>
        </div>
        <div class="mainBottom">
          <ul class="nav nav-tabs nav-center" id="myTab" role="tablist">
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
          <div class="container-fluid tab-content__background">
            <div class="tab-content tab-content__main" id="myTabContent">
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
                    {listCinema()}
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
                            onClick={() => {
                              renderLichChieu(tomorrow.getDate());
                            }}
                          >
                            <p class="day">{days[0]}</p>
                            <p class="date">{tomorrow.getDate()}</p>
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
                            onClick={() => {
                              renderLichChieu(tomorrow.getDate() + 1);
                            }}
                          >
                            <p class="day">{days[1]}</p>
                            <p class="date">{tomorrow.getDate() + 1}</p>
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
                            onClick={() => {
                              renderLichChieu(tomorrow.getDate() + 2);
                            }}
                          >
                            <p class="day">{days[2]}</p>
                            <p class="date">{tomorrow.getDate() + 2}</p>
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
                            onClick={() => {
                              renderLichChieu(tomorrow.getDate() + 3);
                            }}
                          >
                            <p class="day">{days[3]}</p>
                            <p class="date">{tomorrow.getDate() + 3}</p>
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
                            onClick={() => {
                              renderLichChieu(tomorrow.getDate() + 4);
                            }}
                          >
                            <p class="day">{days[4]}</p>
                            <p class="date">{tomorrow.getDate() + 4}</p>
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
                            onClick={() => {
                              renderLichChieu(tomorrow.getDate() + 5);
                            }}
                          >
                            <p class="day">{days[5]}</p>
                            <p class="date">{tomorrow.getDate() + 5}</p>
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
                            onClick={() => {
                              renderLichChieu(tomorrow.getDate() + 6);
                            }}
                          >
                            <p class="day">{days[6]}</p>
                            <p class="date">{tomorrow.getDate() + 6}</p>
                          </button>
                        </div>
                      </nav>
                      <div
                        class="tab-content list-suatChieu"
                        id="nav-tabContent"
                      >
                        <div
                          class="tab-pane fade show active"
                          id="nav-mon"
                          role="tabpanel"
                          aria-labelledby="nav-mon-tab"
                        >
                          {renderLichChieu1()}
                        </div>
                        <div
                          class="tab-pane fade"
                          id="nav-tue"
                          role="tabpanel"
                          aria-labelledby="nav-tue-tab"
                        >
                          {renderLichChieu1()}
                        </div>
                        <div
                          class="tab-pane fade"
                          id="nav-wed"
                          role="tabpanel"
                          aria-labelledby="nav-wed-tab"
                        >
                          {renderLichChieu1()}
                        </div>
                        <div
                          class="tab-pane fade"
                          id="nav-thu"
                          role="tabpanel"
                          aria-labelledby="nav-thu-tab"
                        >
                          {renderLichChieu1()}
                        </div>
                        <div
                          class="tab-pane fade"
                          id="nav-fri"
                          role="tabpanel"
                          aria-labelledby="nav-fri-tab"
                        >
                          {renderLichChieu1()}
                        </div>
                        <div
                          class="tab-pane fade"
                          id="nav-sat"
                          role="tabpanel"
                          aria-labelledby="nav-sat-tab"
                        >
                          {renderLichChieu1()}
                        </div>
                        <div
                          class="tab-pane fade"
                          id="nav-sun"
                          role="tabpanel"
                          aria-labelledby="nav-sun-tab"
                        >
                          {renderLichChieu1()}
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
                class="tab-pane fade"
                id="thongTin"
                role="tabpanel"
                aria-labelledby="thongTin-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="row thongTin-left">
                      <p class="thongTin-title">Địa điểm</p>
                      <p class="thongTin-info">
                        L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                      </p>
                    </div>
                    <div class="row thongTin-left">
                      <p class="thongTin-title">Điện thoại</p>
                      <p class="thongTin-info">028 62 670 670</p>
                    </div>
                    <div class="row thongTin-left">
                      <p class="thongTin-title">Email/</p>
                      <p class="thongTin-info">info@bhdstar.vn</p>
                    </div>
                    <div class="row thongTin-left">
                      <p class="thongTin-title">TPhòng chiếu</p>
                      <p class="thongTin-info">7 2D. 4 3D</p>
                    </div>
                    <div class="row thongTin-left">
                      <p class="thongTin-title">Giờ mở cửa</p>
                      <p class="thongTin-info">8:00 - 24:00</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <p class="fw-bold">Giới thiệu</p>
                    <span>
                      BHD Star Bitexco ICON 68 là một trong những cụm rạp được
                      đầu tư quy mô nhất hiện nay tại Việt Nam, với tổng diện
                      tích hơn 2.000 m2, bao gồm 7 phòng chiếu được trang bị
                      theo tiêu chuẩn quốc tế. Âm thanh đạt chuẩn Dolby 7.1 với
                      hệ thống cách âm hiện đại, trong đó có 4 phòng 3D, cùng
                      hơn 1.000 ghế ngồi được thiết kế theo kiểu dáng đẹp mắt và
                      tiện dụng để mang lại sự thoải mái nhất cho khán giả.
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="danhGia"
                role="tabpanel"
                aria-labelledby="danhGia-tab"
              >
                <div class="detailReviewer">
                  <div class="yourRating blockReviewer">
                    <span class="imgReviewer">
                      <img src="img/avatar.png" />
                    </span>
                    <input
                      class="inputReviewer"
                      type="text"
                      placeholder="Hãy chấm điểm cho rạp nhé!"
                    />
                    <span class="starReviewer">
                      <img src="img/listStar.png" />
                    </span>
                  </div>
                  <div class="listReview">
                    <div class="blockReviewer blockReviewerComment">
                      <div class="reviewerComment">
                        <div class="mainInfo">
                          <div class="infoReview">
                            <div class="infoReviewIcon">
                              <img src="img/avatar.png" />
                            </div>
                            <div class="infoReviewName">
                              <p class="infoReviewName__name">Member</p>
                              <p class="infoReviewName__day">1 ngày trước</p>
                            </div>
                          </div>
                          <div class="infoRating">
                            <div class="infoRatingMark">9</div>
                            <div class="infoRatingStar">
                              <img src="img/star.png" />
                              <img src="img/star.png" />
                              <img src="img/star.png" />
                              <img src="img/star.png" />
                              <img src="img/star.png" />
                            </div>
                          </div>
                        </div>
                        <div class="mainComment">Tốt</div>
                        <div class="likeComment">
                          <div class="likeComment__like">
                            <img src="img/like.png" />
                            <span>1 thích</span>
                          </div>
                        </div>
                      </div>
                      <div class="listComment"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fix-background container-fluid"></div>
        </div>
      </div>
    </div>
  );
}
