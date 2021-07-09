import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./css.css";
import logoCinema from "./images/BHD-cinema.png";
import cinemaStarBitexco from "./images/bhd-star-bitexco.png";
import logo from "./images/logo-cinema.png";
import Loading from "../Loading";
import { Cinema_Fetch, CinemaSys_Fetch } from "./Modules/actions";
export default function Cinema() {
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
      return <div>Vui lòng chọn Hệ Thống rạp</div>;
    } else {
      return dataSys[0].lstCumRap.map((item, i) => {
        return (
          <li class="nav-item" role="presentation">
            <button
              class="nav-link cinebtn"
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
                </div>
              </div>
            </button>
            <Link
              className="linkwidth"
              to={`/DetailCinema/${dataSys[0].maHeThongRap}/${item.maCumRap}`}
            >
              Chi Tiết
            </Link>
          </li>
        );
      });
    }
  };
  const ClickCinema = (cumrap) => {
    setState1({ ...state1, dataLichChieu: [] });
    dispatch(CinemaSys_Fetch(cumrap));
  };
  const ClickCinemaSys = async (dataList) => {
    await setState({ ...state, dataRap: dataList.danhSachPhim });
    if (!loadingSys) {
      let btn = document.querySelectorAll(".fibtn");
      btn[0].click();
    }
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
  return (
    <div>
      <section class="cinema" id="sectionCinema">
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
                      class="nav-link active fibtn"
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
