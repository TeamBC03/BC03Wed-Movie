import React from "react";
import "./css.css";
export default function Film() {
  return (
    <section class="film container">
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
                    <img src="./images/play-video.jpg" alt="play" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
        <div
          class="tab-pane fade"
          id="sapChieu"
          role="tabpanel"
          aria-labelledby="sapChieu-tab"
        >
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
                    <img src="./images/play-video.png" />
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
