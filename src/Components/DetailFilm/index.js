import React from "react";
import "./detailFilm.css"

export default function DetailFilm() {
  return (
    <div>
      <div className="detailFilm">
        <div className="mainTop">
          <div className="styleBlur" />
          <div className="styleGradient" />
          <div className="content d-flex">
            <div className="col-md-3 content-image">
              <img src="./img/film.png" />
            </div>
            <div className="col-md-5 content-film">
              <div className="content-date">
                <span>16.04.2021</span>
              </div>
              <div className="content-name">
                <span className="content-name__age">C18</span>
                <span className="content-name__name">Lật Mặt : 48h </span>
              </div>
              <div className="content-time">
                <span>100 phút - 0 IMDb - 2D/Digital</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mainBottom">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="thongTin-tab"
                data-bs-toggle="tab"
                data-bs-target="#thongTin"
                type="button"
                role="tab"
                aria-controls="thongTin"
                aria-selected="true"
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
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="thongTin"
                role="tabpanel"
                aria-labelledby="thongTin-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="row thongTin-left">
                      <p className="thongTin-title">Ngày công chiếu</p>
                      <p className="thongTin-info">16.04.2021</p>
                    </div>
                    <div className="row thongTin-left">
                      <p className="thongTin-title">Đạo diễn</p>
                      <p className="thongTin-info">Lý Hải</p>
                    </div>
                    <div className="row thongTin-left">
                      <p className="thongTin-title">Diễn viên</p>
                      <p className="thongTin-info">
                        Tiết Cương, Huỳnh Đông, Mạc Văn Khoa, Ốc Thanh Vân
                      </p>
                    </div>
                    <div className="row thongTin-left">
                      <p className="thongTin-title">Thể loại</p>
                      <p className="thongTin-info">Hành động</p>
                    </div>
                    <div className="row thongTin-left">
                      <p className="thongTin-title">Định dạng</p>
                      <p className="thongTin-info">2D/Digital</p>
                    </div>
                    <div className="row thongTin-left">
                      <p className="thongTin-title">Quốc gia SX</p>
                      <p className="thongTin-info">Việt Nam</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="fw-bold">Nội dung</p>
                    <span>
                      Lật Mặt 5: 48H kể về Hiền - một cựu vận động viên võ thuật
                      sau khi giải nghệ vì chấn thương đã cùng vợ và con gái về
                      quê thăm gia đình Lâm. Họ bị cuốn vào một cuộc rượt đuổi
                      với tay phản diện A Dìn. Để bảo vệ cho gia đình nhỏ, Hiền
                      phải đưa vợ con chạy trốn khắp miền Tây sông nước với sự
                      trợ giúp của người bạn thật thà và hài hước.
                    </span>
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
                              <p className="infoReviewName__day">
                                1 ngày trước
                              </p>
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
    </div>
  );
}
