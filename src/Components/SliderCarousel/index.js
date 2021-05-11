import React from "react";
import "./css.css";
export default function Carousel() {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.galaxycine.vn/media/2021/4/16/1042-x-347-_1618547417542.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.galaxycine.vn/media/2021/4/16/1042-x-347-_1618547417542.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.galaxycine.vn/media/2021/4/16/1042-x-347-_1618547417542.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="Carousel-FastBooking">
        <div className="fastBookingHeader">
          <h5>MUA VÉ NHANH</h5>
        </div>
        <div className="Carousel-FastBooking-fluid">
          <ul
            className="nav nav-pills mb-3 fastBooking-container"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Theo Phim
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Theo Ngày
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Theo Rạp
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="fastBooking-content">
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="fastBooking-content">
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="fastBooking-content">
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
                <select>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                  <option>Chọn Rạp</option>
                </select>
              </div>
            </div>
          </div>
          <div className="fastBooking-button">
            <button>MUA VÉ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
