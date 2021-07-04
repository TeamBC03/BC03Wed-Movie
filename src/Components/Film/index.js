import React from "react";
import "./css.css";
import playButton from "./images/play-video.png";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Film_Fetch } from "./modules/action";
import Loading from "../../Components/Loading/index";
export default function Film(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Film_Reducer.loading);
  const data = useSelector((state) => state.Film_Reducer.data);
  dispatch(Film_Fetch());
  const DetailMovie = (id) => {
    // props.history.replace("/detailMovie/" + id);
    console.log(props);
  };
  const listMovieNow = () => {
    return data.map((item, i) => {
      const style = {
        backgroundImage: `url( ${item.hinhAnh} )`,
      };
      const url = `/detailMovie/${item.maPhim}`;
      if (i < 4) {
        return (
          <div class="col-md-3 col-6 film-item">
            <div class="film-image" style={style}>
              <div class="film-rate">
                <p>8.0</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
              <div class="film-overlay">
                <button>
                  <img src={playButton} alt="play" />
                </button>
              </div>
            </div>
            <div class="film-info">
              <div class="film-name">
                <span>P</span>
                {item.tenPhim}
              </div>
              <div class="film-time">100 phút</div>

              <Link to={url} className="btn btn-success film-button">
                CHI TIẾT
              </Link>
            </div>
          </div>
        );
      }
    });
  };
  const listMovieNow1 = () => {
    return data.map((item, i) => {
      const style = {
        backgroundImage: `url( ${item.hinhAnh} )`,
      };
      const url = `/detailMovie/${item.maPhim}`;
      if (i >= 4 && i < 8) {
        return (
          <div class="col-md-3 col-6 film-item">
            <div class="film-image" style={style}>
              <div class="film-rate">
                <p>8.0</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
              <div class="film-overlay">
                <button>
                  <img src={playButton} alt="play" />
                </button>
              </div>
            </div>
            <div class="film-info">
              <div class="film-name">
                <span>P</span>
                {item.tenPhim}
              </div>
              <div class="film-time">100 phút</div>
              <Link to={url} className="btn btn-success film-button">
                CHI TIẾT
              </Link>
            </div>
          </div>
        );
      }
    });
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <section class="film">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="dangChieu-tab"
            data-bs-toggle="tab"
            data-bs-target="#dangChieu"
            role="tab"
            aria-controls="dangChieu"
            aria-selected="true"
          >
            Đang Chiếu
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="sapChieu-tab"
            data-bs-toggle="tab"
            data-bs-target="#sapChieu"
            role="tab"
            aria-controls="sapChieu"
            aria-selected="false"
          >
            Sắp Chiếu
          </button>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="dangChieu"
          role="tabpanel"
          aria-labelledby="dangChieu-tab"
        >
          <NavLink to="/NowList" className="see-all">
            XEM TẤT CẢ <i class="fa fa-chevron-right"></i>
          </NavLink>
          <div class="row film-list">{listMovieNow()}</div>
          <div class="row film-list">{listMovieNow1()}</div>
        </div>
        <div
          class="tab-pane fade"
          id="sapChieu"
          role="tabpanel"
          aria-labelledby="sapChieu-tab"
        >
          <div class="row ">
            <div class="col-md-3 film-item">
              <div class="film-image">
                <div class="film-rate">
                  <p>8.0</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="film-overlay">
                  <button>
                    <img src={playButton} alt="play" />
                  </button>
                </div>
              </div>
              <div class="film-info">
                <div class="film-name">
                  <span>P</span>
                  Trạng Tí Phiêu Lưu Kí
                </div>
                <div class="film-time">100 phút</div>
              </div>
            </div>
            <div class="col-md-3 film-item">
              <div class="film-image">
                <div class="film-rate">
                  <p>8.0</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="film-overlay">
                  <button>
                    <img src={playButton} alt="play" />
                  </button>
                </div>
              </div>
              <div class="film-info">
                <div class="film-name">
                  <span>P</span>
                  Trạng Tí Phiêu Lưu Kí
                </div>
                <div class="film-time">100 phút</div>
              </div>
            </div>
            <div class="col-md-3 film-item">
              <div class="film-image">
                <div class="film-rate">
                  <p>8.0</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="film-overlay">
                  <button>
                    <img src={playButton} alt="play" />
                  </button>
                </div>
              </div>
              <div class="film-info">
                <div class="film-name">
                  <span>P</span>
                  Trạng Tí Phiêu Lưu Ký
                </div>
                <div class="film-time">100 phút</div>
              </div>
            </div>
            <div class="col-md-3 film-item">
              <div class="film-image">
                <div class="film-rate">
                  <p>8.0</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="film-overlay">
                  <button>
                    <img src={playButton} alt="play" />
                  </button>
                </div>
              </div>
              <div class="film-info">
                <div class="film-name">
                  <span>P</span>
                  Trạng Tí Phiêu Lưu Kí
                </div>
                <div class="film-time">100 phút</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 film-item">
              <div class="film-image">
                <div class="film-rate">
                  <p>8.0</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="film-overlay">
                  <button>
                    <img src={playButton} alt="play" />
                  </button>
                </div>
              </div>
              <div class="film-info">
                <div class="film-name">
                  <span>P</span>
                  Trạng Tí Phiêu Lưu Kí
                </div>
                <div class="film-time">100 phút</div>
              </div>
            </div>
            <div class="col-md-3 film-item">
              <div class="film-image">
                <div class="film-rate">
                  <p>8.0</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="film-overlay">
                  <button>
                    <img src={playButton} alt="play" />
                  </button>
                </div>
              </div>
              <div class="film-info">
                <div class="film-name">
                  <span>P</span>
                  Trạng Tí Phiêu Lưu Kí
                </div>
                <div class="film-time">100 phút</div>
              </div>
            </div>
            <div class="col-md-3 film-item">
              <div class="film-image">
                <div class="film-rate">
                  <p>8.0</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="film-overlay">
                  <button>
                    <img src={playButton} alt="play" />
                  </button>
                </div>
              </div>
              <div class="film-info">
                <div class="film-name">
                  <span>P</span>
                  Trạng Tí Phiêu Lưu Ký
                </div>
                <div class="film-time">100 phút</div>
              </div>
            </div>
            <div class="col-md-3 film-item">
              <div class="film-image">
                <div class="film-rate">
                  <p>8.0</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="film-overlay">
                  <button>
                    <img src={playButton} alt="play" />
                  </button>
                </div>
              </div>
              <div class="film-info">
                <div class="film-name">
                  <span>P</span>
                  Trạng Tí Phiêu Lưu Kí
                </div>
                <div class="film-time">100 phút</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilmHome: () => {
      dispatch(Film_Fetch());
    },
  };
};
const mapStateToProps = (state) => {
  return { loading: state.Film_Reducer.loading, data: state.Film_Reducer.data };
};
