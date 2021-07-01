import React from "react";
import "./css.css";
import logoCinema from "./images/BHD-cinema.png";
import cinemaStarBitexco from "./images/bhd-star-bitexco.png";
import logo from "./images/logo-cinema.png";

export default function Cinema() {
  return (
    <div>
      <section class="cinema">
        <div
          class="nav flex-column nav-pills col-md-2 cinema-cumRap "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link active cinema-cumRap__item"
            id="bhd-tab"
            data-bs-toggle="pill"
            data-bs-target="#bhd"
            role="tab"
            aria-controls="bhd"
            aria-selected="true"
            type="button"
          >
            <img src={logoCinema} />
          </button>
          <button
            class="nav-link cinema-cumRap__item"
            id="cns-tab"
            data-bs-toggle="pill"
            data-bs-target="#cns"
            role="tab"
            aria-controls="cns"
            aria-selected="false"
            type="button"
          >
            <img src={logoCinema} />
          </button>
          <button
            class="nav-link cinema-cumRap__item"
            id="beta-tab"
            data-bs-toggle="pill"
            data-bs-target="#beta"
            role="tab"
            aria-controls="beta"
            aria-selected="false"
            type="button"
          >
            <img src={logoCinema} />
          </button>
          <button
            class="nav-link cinema-cumRap__item"
            id="ddc-tab"
            data-bs-toggle="pill"
            data-bs-target="#ddc"
            role="tab"
            aria-controls="ddc"
            aria-selected="false"
            type="button"
          >
            <img src={logoCinema} />
          </button>
          <button
            class="nav-link cinema-cumRap__item"
            id="megags-tab"
            data-bs-toggle="pill"
            data-bs-target="#megags"
            role="tab"
            aria-controls="megags"
            aria-selected="false"
            type="button"
          >
            <img src={logoCinema} />
          </button>
          <button
            class="nav-link cinema-cumRap__item"
            id="dcine-tab"
            data-bs-toggle="pill"
            data-bs-target="#dcine"
            role="tab"
            aria-controls="dcine"
            aria-selected="false"
            type="button"
          >
            <img src={logoCinema} />
          </button>
          <button
            class="nav-link cinema-cumRap__item"
            id="lotte-tab"
            data-bs-toggle="pill"
            data-bs-target="#lotte"
            role="tab"
            aria-controls="lotte"
            aria-selected="false"
            type="button"
          >
            <img src={logoCinema} />
          </button>
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
                {" "}
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <div class="cinema-item row">
                      <div class="col-md-3 cinema-item__image">
                        <img
                          src={cinemaStarBitexco}
                          style={{ width: `50px` }}
                        />
                      </div>
                      <div class="col-md-9 cinema-item__info">
                        <span>
                          <span class="brand-name">BHD Star</span>- Bitexco
                        </span>
                        <p class="address">
                          L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                        </p>
                        <a href="#">[chi tiết]</a>
                      </div>
                    </div>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <div class="cinema-item row">
                      <div class="col-md-3 cinema-item__image">
                        <img
                          src={cinemaStarBitexco}
                          style={{ width: `50px` }}
                        />
                      </div>
                      <div class="col-md-9 cinema-item__info">
                        <span>
                          <span class="brand-name">BHD Star</span>- Bitexco
                        </span>
                        <p class="address">
                          L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                        </p>
                        <a href="#">[chi tiết]</a>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="cns"
            role="tabpanel"
            aria-labelledby="cns-tab"
          >
            CNS
          </div>
          <div
            class="tab-pane fade"
            id="beta"
            role="tabpanel"
            aria-labelledby="beta-tab"
          >
            BETA
          </div>
          <div
            class="tab-pane fade"
            id="ddc"
            role="tabpanel"
            aria-labelledby="ddc-tab"
          >
            DDC
          </div>
          <div
            class="tab-pane fade"
            id="megags"
            role="tabpanel"
            aria-labelledby="megags-tab"
          >
            MegaGS
          </div>
          <div
            class="tab-pane fade"
            id="dcine"
            role="tabpanel"
            aria-labelledby="dcine-tab"
          >
            DCine
          </div>
          <div
            class="tab-pane fade"
            id="lotte"
            role="tabpanel"
            aria-labelledby="lotte-tab"
          >
            Lotte
          </div>
        </div>
        <div
          class="cinema-session text-center tab-content"
          id="myTabContent"
        >
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
