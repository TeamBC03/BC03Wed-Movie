import React from "react";
import "./css.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CinemaSeatFectch, CinemaSeatBookingFectch } from "./modules/actions";
import Loading from "../Loading";
import { getByDisplayValue } from "@testing-library/react";
export default function CinemaSeat(props) {
  // btnSeat.forEach((item, i) => {
  //   btnSeat[i].addEventListener("click", () => {
  //     console.log(i);
  //   });
  // });
  const [state, setstate] = useState({ ListBook: [] });

  let listBookFake = [];
  const loading = useSelector((state) => state.CinemaSeatsReducer.loading);
  const data = useSelector((state) => state.CinemaSeatsReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CinemaSeatFectch(props.id));
  }, []);

  useEffect(() => {
    if (!loading) {
      let btnSeat = document.querySelectorAll(".seat");
      data.danhSachGhe.forEach((item, i) => {
        if (item.taiKhoanNguoiDat != null) {
          btnSeat[i].classList.add("active2");
        }
      });
    }

    let btnSeat = document.querySelectorAll(".seat");
    btnSeat.forEach((item, i) => {
      item.addEventListener("click", () => {
        if (!item.classList.contains("active2")) {
          if (item.classList.contains("active1")) {
            item.classList.remove("active1");
            let vitri = listBookFake.findIndex((ghe) => {
              return ghe.maGhe === item.maGhe;
            });
            listBookFake.splice(vitri, 1);
            setstate({ ...state, ListBook: listBookFake });
          } else {
            item.classList.add("active1");
            listBookFake.push(data.danhSachGhe[i]);

            setstate({ ...state, ListBook: listBookFake });
            console.log(state.ListBook);
          }
        }

        console.log(i);
      });
    });
  }, [loading]);
  const renderBook = () => {
    return state.ListBook.map((item) => {
      if (item.loaiGhe === "Thuong") {
        return " " + item.tenGhe + ",";
      }
    });
  };
  const renderBookVIP = () => {
    return state.ListBook.map((item) => {
      if (item.loaiGhe === "Vip") {
        return " " + item.tenGhe + ",";
      }
    });
  };
  const clickBooking = () => {
    let tk = "";
    let danhSachVe = [];
    state.ListBook.forEach((item) => {
      danhSachVe.push({
        maGhe: item.maGhe,
        giaVe: item.giaVe,
      });
    });
    if (localStorage.getItem("User")) {
      tk = JSON.parse(localStorage.getItem("User")).taiKhoan;
    } else {
      tk = JSON.parse(localStorage.getItem("UserAdmin")).taiKhoan;
    }

    const Booking = {
      maLichChieu: props.id,
      danhSachVe: danhSachVe,
      taiKhoanNguoiDung: tk,
    };
    console.log(Booking);
    dispatch(CinemaSeatBookingFectch(Booking));
  };
  const CoutBookVIP = () => {
    let number = 0;
    state.ListBook.forEach((item) => {
      if (item.loaiGhe === "Vip") {
        number += parseInt(item.giaVe);
      }
    });
    return number;
  };
  const CoutBookNor = () => {
    let number = 0;
    state.ListBook.forEach((item) => {
      if (item.loaiGhe === "Thuong") {
        number += parseInt(item.giaVe);
      }
    });
    return number;
  };
  if (loading) {
    return <Loading />;
  } else {
  }

  return (
    <div className="cinemaSeats">
      <div className="cinemaSeats__left col-lg-8 col-12">
        <div className="cinemaSeats-header">
          <div className="cinemaSeats-header__cinema d-flex">
            <div className="cinemaSeats-header__image">
              <img src={data.thongTinPhim.hinhAnh} />
            </div>
            <div className="cinemaSeats-header__content">
              <p className="cinemaSeats-header__name">
                {data.thongTinPhim.tenCumRap}
              </p>
              <p className="cinemaSeats-header__info">
                {`${data.thongTinPhim.ngayChieu}-${data.thongTinPhim.gioChieu}-${data.thongTinPhim.tenRap}`}
              </p>
            </div>
          </div>
          <div className="cinemaSeats-header__time">
            <p className="cinemaSeats-header__timeTitle">Th???i gian ?????t gh???</p>
            <p className="cinemaSeats-header__timeCountdown">5:00</p>
          </div>
        </div>
        <div className="theater">
          <div className="cinema-seats left">
            <div className="cinema-row row-1">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
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
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-8">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
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
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="cinema-row row-8">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
          </div>
        </div>
        <div className="cinema-screen">
          <p>SCREEN</p>
        </div>
        <div className="cinemaSeats__note">
          <div className="cinemaSeats__note-item">
            <div className="cinemaSeats__note-item__color" id="gheTrong"></div>
            <div className="cinemaSeats__note-item__type">Gh??? tr???ng</div>
          </div>
          <div className="cinemaSeats__note-item">
            <div
              className="cinemaSeats__note-item__color"
              id="gheDaDuocDat"
            ></div>
            <div className="cinemaSeats__note-item__type">
              Gh??? ???? c?? ng?????i ?????t
            </div>
          </div>
          <div className="cinemaSeats__note-item">
            <div
              className="cinemaSeats__note-item__color"
              id="gheDangDat"
            ></div>
            <div className="cinemaSeats__note-item__type">Gh??? ??ang ch???n</div>
          </div>
        </div>
      </div>
      <div className="cinemaSeats__right col-lg-4 col-12">
        <div className="ticketBooking">
          <div className="ticketBooking__filmInfo">
            <p className="ticketBooking__filmInfo-name">
              {data.thongTinPhim.tenPhim}
            </p>
            <p className="ticketBooking__filmInfo-cinema">
              {data.thongTinPhim.tenCumRap}
            </p>
            <p className="ticketBooking__filmInfo-info">
              {`${data.thongTinPhim.ngayChieu} - ${data.thongTinPhim.gioChieu} -${data.thongTinPhim.tenRap}`}
            </p>
          </div>
          <div className="ticketBooking__userInfo-pay">
            <div className="ticketBooking__userInfo">
              <div className="ticketBooking__userInfo-bill">
                <p className="bill-title">
                  V?? TH?????NG :<p className="bill-seat">{renderBook()}</p>
                </p>
                <p className="bill-value">{CoutBookNor()}</p>
              </div>
              <div className="ticketBooking__userInfo-bill">
                <p className="bill-title">
                  V?? VIP:
                  <p className="bill-seat">{renderBookVIP()}</p>
                </p>
                <p className="bill-value">{CoutBookVIP()}</p>
              </div>
              <form>
                <label htmlFor="email">Email :</label>
                <br />
                <input type="text" id="email" name="email" />
                <br />
                <label htmlFor="phoneNumber">Phone :</label>
                <br />
                <input type="text" id="phoneNumber" />
                <br />
                <br />
              </form>
              <div className="ticketBooking__userInfo-email" />
              <div className="ticketBooking__userInfo-phoneNumber" />
            </div>{" "}
            <div className="ticketBooking__pay">
              <form>
                <p className="ticketBooking__pay-title">
                  H??nh th???c thanh to??n:
                </p>
                <input type="radio" id="zalo" name="pay" defaultValue="zalo" />
                <label htmlFor="zalo">Thanh to??n qua ZaloPay</label>
                <br />
                <input type="radio" id="visa" name="pay" defaultValue="visa" />
                <label htmlFor="visa">Visa, Master, JCB</label>
                <br />
                <input type="radio" id="atm" name="pay" defaultValue="atm" />
                <label htmlFor="atm">Th??? ATM n???i ?????a</label>
                <br />
                <input
                  type="radio"
                  id="convenienceStore"
                  name="pay"
                  defaultValue="convenienceStore"
                />
                <label htmlFor="convenienceStore">
                  Thanh to??n t???i c???a h??ng ti???n ??ch
                </label>
              </form>
            </div>
          </div>
          <div className="ticketBooking__button">
            {" "}
            <button
              className="btn btn-danger mt-4"
              id="btnBooking"
              onClick={clickBooking}
            >
              ?????t v??
            </button>
          </div>  
          <div className="ticketBooking__alert">
            <span>
              <i className="fa fa-exclamation-circle" /> V?? ???? mua kh??ng th??? ?????i
              ho???c ho??n ti???n. M?? v?? s??? ???????c g???i qua tin nh???n ZMS (tin nh???n Zalo)
              v?? Email ???? nh???p
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
