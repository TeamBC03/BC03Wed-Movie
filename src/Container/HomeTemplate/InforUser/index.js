import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { InfoFectch } from "./Modules/action";
import "./css.css";
import Loading from "../../../Components/Loading/index";
export default function InfoUser(props) {
  const [state, setState] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDT: "",
    matKhau: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
  });

  const data = useSelector((state) => state.InfoReducer.data);
  const loading = useSelector((state) => state.InfoReducer.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("User")) {
      dispatch(InfoFectch(JSON.parse(localStorage.getItem("User")).taiKhoan));
    }
  }, []);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    console.log(state);
    window.location.reload();
  };
  const setdefaut = () => {
    setState({
      ...state,
      taiKhoan: data.taiKhoan,
      hoTen: data.hoTen,
      email: data.email,
      soDT: data.soDT,
      matKhau: data.matKhau,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    });
  };
  if (!localStorage.getItem("User")) {
    props.history.replace("/");
    return <div></div>;
  }
  if (loading) {
    return <Loading />;
  }

  const renderMovieViewed = () => {
    return data.thongTinDatVe.map((item) => {
      return (
        <div class="col-md d-flex ticketItem">
          <div class="ticketContent">
            <div class="ticketCinema d-flex">
              <div class="ticketCinema__image">
                <img src="./img/bhd-star-bitexco.png" />
              </div>
              <div class="ticketCinema__info">
                <div class="ticketCinema__name">
                  {item.danhSachGhe[0].tenHeThongRap}
                </div>
                <div class="ticketCinema__address">
                  116 Nguyễn Du, Q.1, TP. HCM
                </div>
              </div>
            </div>
            <div class="ticketInfo">
              <div class="ticketInfo__name d-flex">
                <div class="col-md-4 infoTitle">Tên phim</div>
                <div class="col-md-6 infoUser">{item.tenPhim}</div>
              </div>
              <div class="ticketInfo__date d-flex">
                <div class="col-md-4 infoTitle">Ngày đặt</div>
                <div class="col-md-6 infoUser">{item.ngayDat}</div>
              </div>
              <div class="ticketInfo__room d-flex">
                <div class="col-md-4 infoTitle">Số rạp</div>
                <div class="col-md-6 infoUser">
                  {item.danhSachGhe[0].tenCumRap}
                </div>
              </div>
              <div class="ticketInfo__seat d-flex">
                <div class="col-md-4 infoTitle">Số ghế</div>
                <div class="col-md-6 infoUser">
                  {item.danhSachGhe[0].tenGhe}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container InfoUser">
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New message
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Họ và Tên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={handleOnchange}
                      name="hoTen"
                      value={state.hoTen}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      onChange={handleOnchange}
                      name="email"
                      value={state.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      MẬT KHẨU
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      onChange={handleOnchange}
                      name="matKhau"
                      value={state.matKhau}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      SDT
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="SDT"
                      onChange={handleOnchange}
                      name="soDT"
                      value={state.soDT}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Cập Nhật
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-body">
        {/* Breadcrumb */}

        {/* /Breadcrumb */}
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>{data.hoTen}</h4>
                    <p className="text-secondary mb-1">{data.loaiNguoiDung}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-globe mr-2 icon-inline"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <line x1={2} y1={12} x2={22} y2={12} />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    Website
                  </h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github mr-2 icon-inline"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Github
                  </h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter mr-2 icon-inline text-info"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                    Twitter
                  </h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Instagram
                  </h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Tên Tài Khoản</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{data.taiKhoan}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Họ và Tên</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{data.hoTen}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{data.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{data.soDT}</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-12">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                      onClick={setdefaut}
                    >
                      Chỉnh Sửa Thông Tin
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gutters-sm">{renderMovieViewed()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
