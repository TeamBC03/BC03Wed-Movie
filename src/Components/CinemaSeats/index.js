import React from "react";
import "./css.css";

export default function CinemaSeat() {
  return (
    <div className="cinemaSeats">
      <div className="cinemaSeats__left col-md-8">
        <div className="cinemaSeats-header">
          <div className="cinemaSeats-header__cinema d-flex">
            <div className="cinemaSeats-header__image">
              <img src="./img/logo.png" />
            </div>
            <div className="cinemaSeats-header__content">
              <p className="cinemaSeats-header__name">Galaxy - Quang Trung</p>
              <p className="cinemaSeats-header__info">
                Hôm nay - 13:00 - Rạp 5
              </p>
            </div>
          </div>
          <div className="cinemaSeats-header__time">
            <p className="cinemaSeats-header__timeTitle">Thời gian đặt ghế</p>
            <p className="cinemaSeats-header__timeCountdown">5:00</p>
          </div>
        </div>
        <div className="theatre">
          <div className="cinema-seats left">
            <div className="cinema-row row-1">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-2">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-3">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-4">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-5">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-6">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-7">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
          </div>
          <div className="cinema-seats right">
            <div className="cinema-row row-1">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-2">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-3">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-4">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-5">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-6">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-7">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
          </div>
          <div className="cinema-screen">
            <p>SCREEN</p>
          </div>
        </div>
      </div>
      <div className="cinemaSeats__right col-md-4">
        <div className="ticketBooking">
          <div className="ticketBooking__filmInfo">
            <p className="ticketBooking__filmInfo-name">
              Câu chuyện đồ chơi - Toy Story 4
            </p>
            <p className="ticketBooking__filmInfo-cinema">
              Galaxy - Quang Trung
            </p>
            <p className="ticketBooking__filmInfo-info">
              Hôm nay 15/07/2021 - 18:00 - RẠP 5
            </p>
          </div>
          <div className="ticketBooking__userInfo">
            <div className="ticketBooking__userInfo-bill">
              <p className="bill-title">Giá vé</p>
              <p className="bill-value">120.000đ</p>
            </div>
            <form>
              <label htmlFor="email">Email :</label>
              <br />
              <input type="text" id="email" name="email" />
              <br />
              <label htmlFor="phoneNumber">Số điện thoại :</label>
              <br />
              <input type="text" id="phoneNumber" />
              <br />
              <br />
            </form>
            <div className="ticketBooking__userInfo-email" />
            <div className="ticketBooking__userInfo-phoneNumber" />
          </div>
          <div className="ticketBooking__pay">
            <form>
              <p className="ticketBooking__pay-title">Hình thức thanh toán:</p>
              <input type="radio" id="zalo" name="pay" defaultValue="zalo" />
              <label htmlFor="zalo">Thanh toán qua ZaloPay</label>
              <br />
              <input type="radio" id="visa" name="pay" defaultValue="visa" />
              <label htmlFor="visa">Visa, Master, JCB</label>
              <br />
              <input type="radio" id="atm" name="pay" defaultValue="atm" />
              <label htmlFor="atm">Thẻ ATM nội địa</label>
              <br />
              <input
                type="radio"
                id="convenienceStore"
                name="pay"
                defaultValue="convenienceStore"
              />
              <label htmlFor="convenienceStore">
                Thanh toán tại cửa hàng tiện ích
              </label>
            </form>
          </div>
          <div className="ticketBooking__alert">
            <span>
              <i className="fa fa-exclamation-circle" /> Vé đã mua không thể đổi
              hoặc hoàn tiền. Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo)
              và Email đã nhập
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
