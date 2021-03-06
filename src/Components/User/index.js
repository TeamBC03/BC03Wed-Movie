import React from "react";
import "./user.css"

export default function User() {
  return (
    <div>
      <div className="user"></div>

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="thongTin-tab"
            data-bs-toggle="tab"
            data-bs-target="#thongTin"
            type="button"
            role="tab"
            aria-controls="thongTin"
            aria-selected="true"
          >
            THÔNG TIN CÁ NHÂN
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="datVe-tab"
            data-bs-toggle="tab"
            data-bs-target="#datVe"
            type="button"
            role="tab"
            aria-controls="datVe"
            aria-selected="false"
          >
            LỊCH SỬ ĐẶT VÉ
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="thongTin"
          role="tabpanel"
          aria-labelledby="thongTin-tab"
        >
          <div class="row">
            <div class="col-md-6">
              <div class="email d-flex">
                <div class="col-md-6 infoTitle">Email</div>
                <div class="col-md-6 infoUser">infoemail@gmail.com</div>
              </div>
              <div class="fullname d-flex">
                <div class="col-md-6 infoTitle">Họ tên</div>
                <div class="col-md-6 infoUser">Full Name</div>
              </div>
              <div class="phoneNumber d-flex">
                <div class="col-md-6 infoTitle">Số điện thoại</div>
                <div class="col-md-6 infoUser">0123456789</div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="account d-flex">
                <div class="col-md-6 infoTitle">Tài khoản</div>
                <div class="col-md-6 infoUser">nameaccount</div>
              </div>
              <div class="password d-flex">
                <div class="col-md-6 infoTitle">Mật khẩu</div>
                <div class="col-md-6 infoUser">123456</div>
              </div>
            </div>
          </div>
          <div class="updateInfo mt-3">
            <a href="#" class="infoTitle">
              Chỉnh sửa thông tin
            </a>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="datVe"
          role="tabpanel"
          aria-labelledby="datVe-tab"
        >
          <div class="col-md d-flex ticketItem">
            <div class="ticketImage">
              <img src="./img/trang-ti.jpg" />
            </div>
            <div class="ticketContent">
              <div class="ticketCinema d-flex">
                <div class="ticketCinema__image">
                  <img src="./img/bhd-star-bitexco.png" />
                </div>
                <div class="ticketCinema__info">
                  <div class="ticketCinema__name">BHD Star Bitexco</div>
                  <div class="ticketCinema__address">
                    116 Nguyễn Du, Q.1, TP. HCM
                  </div>
                </div>
              </div>
              <div class="ticketInfo">
                <div class="ticketInfo__name d-flex">
                  <div class="col-md-4 infoTitle">Tên phim</div>
                  <div class="col-md-6 infoUser">Trạng Tí</div>
                </div>
                <div class="ticketInfo__date d-flex">
                  <div class="col-md-4 infoTitle">Ngày đặt</div>
                  <div class="col-md-6 infoUser">28-07-2021 19:30:00</div>
                </div>
                <div class="ticketInfo__room d-flex">
                  <div class="col-md-4 infoTitle">Số rạp</div>
                  <div class="col-md-6 infoUser">Rạp 1</div>
                </div>
                <div class="ticketInfo__seat d-flex">
                  <div class="col-md-4 infoTitle">Số ghế</div>
                  <div class="col-md-6 infoUser">Ghế E10</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md d-flex ticketItem">
            <div class="ticketImage">
              <img src="./img/trang-ti.jpg" />
            </div>
            <div class="ticketContent">
              <div class="ticketCinema d-flex">
                <div class="ticketCinema__image">
                  <img src="./img/bhd-star-bitexco.png" />
                </div>
                <div class="ticketCinema__info">
                  <div class="ticketCinema__name">BHD Star Bitexco</div>
                  <div class="ticketCinema__address">
                    116 Nguyễn Du, Q.1, TP. HCM
                  </div>
                </div>
              </div>
              <div class="ticketInfo">
                <div class="ticketInfo__name d-flex">
                  <div class="col-md-4 infoTitle">Tên phim</div>
                  <div class="col-md-6 infoUser">Trạng Tí</div>
                </div>
                <div class="ticketInfo__date d-flex">
                  <div class="col-md-4 infoTitle">Ngày đặt</div>
                  <div class="col-md-6 infoUser">28-07-2021 19:30:00</div>
                </div>
                <div class="ticketInfo__room d-flex">
                  <div class="col-md-4 infoTitle">Số rạp</div>
                  <div class="col-md-6 infoUser">Rạp 1</div>
                </div>
                <div class="ticketInfo__seat d-flex">
                  <div class="col-md-4 infoTitle">Số ghế</div>
                  <div class="col-md-6 infoUser">Ghế E10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
