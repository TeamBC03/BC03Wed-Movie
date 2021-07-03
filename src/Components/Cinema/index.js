import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css.css";
import logoCinema from "./images/BHD-cinema.png";
import cinemaStarBitexco from "./images/bhd-star-bitexco.png";
import logo from "./images/logo-cinema.png";
import Loading from "../Loading";
import { Cinema_Fetch, CinemaSys_Fetch } from "./Modules/actions";
export default function Cinema() {
  const tomorrow = new Date();
  const [state, setState] = useState({ dataRap: null });
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
  const loading = useSelector((state) => state.CinemaReducer.loading);
  const data = useSelector((state) => state.CinemaReducer.data);
  const loadingSys = useSelector((state) => state.CinemaReducer.loadingSys);
  const dataSys = useSelector((state) => state.CinemaReducer.dataSys);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Cinema_Fetch());
  }, []);
  if (loading) {
    return <Loading />;
  }
  const renderCinema = () => {
    return data.map((item) => {
      return (
        <button
          class="nav-link  cinema-cumRap__item"
          id="bhd-tab"
          data-bs-toggle="pill"
          data-bs-target="#bhd"
          role="tab"
          aria-controls="bhd"
          aria-selected="false"
          type="button"
          onClick={() => {
            ClickCinema(item.maHeThongRap);
          }}
        >
          <img src={item.logo} />
        </button>
      );
    });
  };
  const renderSystemCinema = () => {
    if (loadingSys) {
      return <div>Đang Load</div>;
    } else {
      return dataSys[0].lstCumRap.map((item, i) => {
        return (
          <li class="nav-item" role="presentation">
            <button
              class="nav-link "
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="false"
              onClick={() => {
                ClickCinemaSys(item);
              }}
            >
              <div class="cinema-item row">
                <div class="col-md-3 cinema-item__image">
                  <img src={cinemaStarBitexco} style={{ width: `50px` }} />
                </div>
                <div class="col-md-9 cinema-item__info">
                  <span>
                    <span class="brand-name">{item.tenCumRap}</span>
                  </span>
                  <p class="address">{item.diaChi}</p>
                  <a href="#">[chi tiết]</a>
                </div>
              </div>
            </button>
          </li>
        );
      });
    }
  };
  const ClickCinema = (cumrap) => {
    dispatch(CinemaSys_Fetch(cumrap));
  };
  const ClickCinemaSys = (dataList) => {
    setState({ ...state, dataRap: dataList.danhSachPhim });
    console.log(state.dataRap);
  };
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
  return (
    <div>
      <section class="cinema">
        <div
          class="nav flex-column nav-pills col-md-2 cinema-cumRap "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {renderCinema()}
        </div>
        <div
          class="tab-content col-md-4 cinema-listCinema "
          id="v-pills-tabContent"
        >
          <div
            class="tab-pane fade show active flex-column"
            id="bhd"
            role="tabpanel"
            aria-labelledby="bhd-tab"
          >
            <div class="flex-column ">
              <ul class="nav nav-tabs " id="myTab" role="tablist">
                {renderSystemCinema()}
              </ul>
            </div>
          </div>
        </div>
        <div class="cinema-session text-center tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div class="tab-content" id="nav-tabContent">
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
                <div class="tab-content suatChieu-list" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-mon"
                    role="tabpanel"
                    aria-labelledby="nav-mon-tab"
                  >
                    <div className="suatChieu-item">
                      <div className="suatChieu-item__cinema d-flex">
                        <div className="suatChieu-item__image">
                          <img src={logo} />
                        </div>
                        <div className="suatChieu-item__info">
                          <p className="suatChieu-item__name">
                            GLX - Nguyễn Du
                          </p>
                          <p className="suatChieu-item__address">
                            116 Nguyễn Du, Q.1
                          </p>
                        </div>
                      </div>
                      <div className="suatChieu-item__lichChieu d-flex">
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>

                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                      </div>
                    </div>
                    <div className="suatChieu-item">
                      <div className="suatChieu-item__cinema d-flex">
                        <div className="suatChieu-item__image">
                          <img src={logo} />
                        </div>
                        <div className="suatChieu-item__info">
                          <p className="suatChieu-item__name">
                            GLX - Nguyễn Du
                          </p>
                          <p className="suatChieu-item__address">
                            116 Nguyễn Du, Q.1
                          </p>
                        </div>
                      </div>
                      <div className="suatChieu-item__lichChieu d-flex">
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>

                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                        <div className="suatChieu-item__time col-md-2">
                          12:00
                        </div>
                      </div>
                    </div>
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
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            ...
          </div>
        </div>
      </section>
    </div>
  );
}
