import React, { useState } from "react";
import "./css.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "bootstrap";

import {
  DashboardFectch,
  DashboardFilmFectch,
  DashboardAddUser,
  DashboardDeleteUser,
  DashboardEditUser,
  DashBoardAddfilm,
  DashboardDeleteFilm,
  DashboardEditFilm,
  DashboardDateFilmFectch,
  DashboarCinemaFilmFectch,
  DashboardAddCinema,
} from "./Modules/actions";
import Loading from "../../../Components/Loading";

export default function ManagerPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ManagerReducer.loading);
  const data = useSelector((state) => state.ManagerReducer.data);
  const loadingDateFilm = useSelector(
    (state) => state.ManagerReducer.loadingDateFilm
  );
  const dataDateFilm = useSelector(
    (state) => state.ManagerReducer.dataDateFilm
  );
  const loadingCinemaFilm = useSelector(
    (state) => state.ManagerReducer.loadingCinemaFilm
  );
  const dataCinemaFilm = useSelector(
    (state) => state.ManagerReducer.dataCinemaFilm
  );
  const loadingFilm = useSelector((state) => state.ManagerReducer.loadingFilm);
  const dataFilm = useSelector((state) => state.ManagerReducer.dataFilm);
  const [stateFilm, setstateFilm] = useState({
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP01",
    ngayKhoiChieu: "",
  });
  const [stateCinema, setstateCinema] = useState({
    maPhim: "",
    maRap: "",
    giaVe: "",
    ngayChieuGioChieu: "",
  });
  const [state, setState] = useState({
    search: "",
    searchFilm: "",
    check: true,
    checkfilm: true,
    checkDate: true,
    dataRenderRap: null,
    searchDateFilm: "",
    dataMaPhim: "",
  });
  const clearFilm = async () => {
    await setstateFilm({
      ...stateFilm,
      hinhAnh: {},
      maPhim: "",
      tenPhim: "",
      trailer: "",
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: "",
    });
  };
  const DashboardDelete = (taiKhoan) => {
    const callback = () => {
      setState({ ...state, search: "" });
      dispatch(DashboardFectch());
    };
    DashboardDeleteUser(taiKhoan, callback);
    console.log(taiKhoan);
  };
  // const closeDate =()=>{
  //   loadingDateFilm=true;
  //   dataDateFilm=
  // }
  const [stateUser, setStateUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });
  const editUser = async (user) => {
    await setStateUser({
      ...stateUser,
      taiKhoan: user.taiKhoan,
      matKhau: user.matKhau,
      email: user.email,
      soDt: user.soDt,
      maNhom: "GP01",
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      hoTen: user.hoTen,
    });
    await setState({ ...state, check: false });
    console.log(user);
  };

  useEffect(() => {
    dispatch(DashboardFectch());
    dispatch(DashboardFilmFectch());
  }, []);
  const handleInputChangeFilm = (e) => {
    setState({ ...state, searchFilm: e.target.value });
  };
  const handleInputChange = (e) => {
    setState({ ...state, search: e.target.value });
  };
  const renderUser = () => {
    if (localStorage.getItem("UserAdmin")) {
      return (
        <NavLink to="/user">
          <i className="fas fa-user-shield"></i>
          <span className="ml-1">
            {JSON.parse(localStorage.getItem("UserAdmin")).hoTen}
          </span>
        </NavLink>
      );
    }
  };
  const ClearState = async () => {
    await setStateUser({
      ...stateUser,
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    });
  };
  const submitDate = () => {
    const callback = () => {
      dispatch(DashboardDateFilmFectch(state.dataMaPhim));
    };
    DashboardAddCinema(stateCinema, callback);
    console.log(stateCinema);
  };
  const renderDate = () => {
    if (loadingDateFilm) {
      console.log(loadingDateFilm, dataDateFilm);
      return <Loading />;
    } else {
      console.log(loadingDateFilm, dataDateFilm);
      if (!dataDateFilm) {
        console.log(loadingDateFilm, dataDateFilm);
        return <Loading />;
      } else {
        let data1 = dataDateFilm.lichChieu.filter((item) => {
          return item.thongTinRap.maHeThongRap
            .toLowerCase()
            .includes(state.searchDateFilm.toLowerCase());
        });
        return data1.map((item) => {
          return (
            <tr>
              <td className="showtime__id">{item.maLichChieu}</td>
              <td className="showtime__cinemas">
                {item.thongTinRap.tenHeThongRap}
              </td>
              <td className="showtime__cinema">{item.thongTinRap.tenCumRap}</td>
              <td className="showtime__day">{item.ngayChieuGioChieu}</td>
              <td className="showtime__price">{item.giaVe}</td>
              <td className="showtime__time">{item.thoiLuong}</td>
            </tr>
          );
        });
      }
    }
  };
  const handleChangeSearch = (e) => {
    setState({ ...state, searchDateFilm: e.target.value });
  };
  const renderListUSer = () => {
    let dataSearch = data.filter((item) => {
      return item.taiKhoan.toLowerCase().includes(state.search.toLowerCase());
    });

    return dataSearch.map((item, i) => {
      return (
        <tr>
          <td className="table__id">{i}</td>
          <td className="showtime__cinemas">{item.taiKhoan}</td>
          <td className="table__password">{item.matKhau}</td>
          <td className="table__name">{item.hoTen}</td>
          <td className="table__email">{item.email}</td>
          <td className="table__phone">{item.soDt}</td>
          <td className="table__type">{item.maLoaiNguoiDung}</td>
          <td className="table__action">
            <div className="actionButtons">
              <button
                className="btn btn-danger backIOT1"
                onClick={() => {
                  DashboardDelete(item.taiKhoan);
                }}
              >
                X??a
              </button>
              <button
                className="btn btn-dark backIOT1"
                data-bs-toggle="modal"
                data-bs-target="#exampleUser"
                data-bs-whatever="@mdo"
                data-backdrop="false"
                onClick={() => {
                  editUser(item);
                }}
              >
                Ch???nh S???a
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };
  const renderCumRap = () => {
    if (loadingCinemaFilm) {
      return <option>??ang t???i , ????i x??u</option>;
    } else {
      if (!dataCinemaFilm) {
        return <option>??ang t???i , ????i x??u</option>;
      } else {
        return dataCinemaFilm.map((item) => {
          return <option value={item.maCumRap}>{item.tenCumRap}</option>;
        });
      }
    }
  };
  const renderRap = () => {
    if (state.dataRenderRap === null) {
      return <option>Vui l??ng ch???n C???m r???p</option>;
    } else {
      return state.dataRenderRap[0].danhSachRap.map((item) => {
        return <option value={item.maRap}>{item.tenRap}</option>;
      });
    }
  };
  const handleChangeCumRap = (e) => {
    let dataRap = dataCinemaFilm.filter((item) => {
      return item.maCumRap === e.target.value;
    });

    setState({ ...state, dataRenderRap: dataRap });
    console.log(dataRap);
  };
  const renderAler = () => {
    if (localStorage.getItem("User")) {
      return (
        "Ch??o M???ng Kh??ch H??ng" + JSON.parse(localStorage.getItem("User")).hoTen
      );
    }
    if (localStorage.getItem("UserAdmin")) {
      return (
        "Ch??o M???ng Qu???n Tr??? " +
        JSON.parse(localStorage.getItem("UserAdmin")).hoTen
      );
    }
    if (!localStorage.getItem("User") && !localStorage.getItem("UserAdmin")) {
      return "Ch??o M???ng Kh??ch V??ng Lai";
    }
  };
  const handleChangeTime = (e) => {
    let date = new Date(e.target.value);
    let date1 = "";

    if (date.getDate() < 10 && date.getMonth() + 1 < 10) {
      date1 =
        "0" +
        date.getDate() +
        "/" +
        "0" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":" +
        "00";
    } else if (date.getDate() < 10) {
      date1 =
        "0" +
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":" +
        "00";
    } else if (date.getMonth() + 1 < 10) {
      date1 =
        date.getDate() +
        "/" +
        "0" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":" +
        "00";
    } else {
      date1 =
        date.getDate() +
        (date.getMonth() + 1) +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":" +
        "00";
    }

    setstateCinema({ ...stateCinema, ngayChieuGioChieu: date1 });
    console.log(date1);
  };
  const handleChangeRap = (e) => {
    setstateCinema({ ...stateCinema, maRap: e.target.value });
    console.log("rap :" + e.target.value);
  };
  const handleChangeGiaVe = (e) => {
    setstateCinema({ ...stateCinema, giaVe: e.target.value });
  };
  const renderListFilm = () => {
    let dataSearch = dataFilm.filter((item) => {
      return item.tenPhim
        .toLowerCase()
        .includes(state.searchFilm.toLowerCase());
    });

    return dataSearch.map((item, i) => {
      return (
        <tr>
          <td className="tableMovie__id">{item.maPhim}</td>
          <td className="tableMovie__name">{item.tenPhim}</td>
          <td className="tableMovie__img">
            {" "}
            <img src={item.hinhAnh} className="w-100"></img>
          </td>
          <td className="tableMovie__info">{item.moTa}</td>
          <td className="tableMovie__day">{item.ngayKhoiChieu}</td>
          <td className="tableMovie__action2">
            <div className="actionButtons">
              <button
                className="btn btn-danger backIOT1"
                onClick={() => {
                  DashboardDeletePhim(item.maPhim);
                }}
              >
                X??a
              </button>
              <button
                className="btn btn-dark backIOT1"
                onClick={() => {
                  EditFilm(item);
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Ch???nh S???a
              </button>
              <button
                className="btn btn-dark backIOT1"
                onClick={() => {
                  clickDate(item.maPhim);
                }}
              >
                T???o L???ch Chi???u{" "}
              </button>
            </div>
          </td>
          {/* <td>{item.soDt}</td>
          <td className="LastTd">{item.maLoaiNguoiDung}</td> */}
        </tr>
      );
    });
  };
  const EditFilm = async (film) => {
    await setstateFilm({
      ...setstateFilm,
      maPhim: film.maPhim,
      tenPhim: film.tenPhim,
      trailer: film.trailer,
      moTa: film.moTa,
      maNhom: "GP01",
      ngayKhoiChieu: film.ngayKhoiChieu,
    });
    await setState({ ...state, checkfilm: false });
  };
  const handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      setstateFilm({ ...stateFilm, hinhAnh: e.target.files[0] });
    } else {
      setstateFilm({ ...stateFilm, [e.target.name]: e.target.value });
    }
  };
  const clickDate = (maPhim) => {
    document.getElementById("selectDate").value = "";
    setState({ ...state, searchDateFilm: "", dataMaPhim: maPhim });
    let myModal = new Modal(document.getElementById("DateFilmModal"));
    setstateCinema({ ...stateCinema, maPhim: maPhim });
    dispatch(DashboardDateFilmFectch(maPhim));
    myModal.show();
  };
  const handleChangeUser = (e) => {
    setStateUser({ ...stateUser, [e.target.name]: e.target.value });
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (state.check) {
      dispatch(DashboardAddUser(stateUser));
    } else {
      const callback = () => {
        dispatch(DashboardFectch());
      };
      DashboardEditUser(stateUser, callback);
    }

    document.getElementById("myForm").reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in stateFilm) {
      console.log(key);
      if (key === "ngayKhoiChieu") {
        let date = new Date(stateFilm[key]);
        let date1 = "";
        if (date.getDate() < 10 && date.getMonth() + 1 < 10) {
          date1 =
            "0" +
            date.getDate() +
            "/" +
            "0" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear();
        } else if (date.getDate() < 10) {
          date1 =
            "0" +
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear();
        } else if (date.getMonth() + 1 < 10) {
          date1 =
            date.getDate() +
            "/" +
            "0" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear();
        } else {
          date1 = date.getDate() + (date.getMonth() + 1) + date.getFullYear();
        }

        form_data.append(key, date1);
      } else {
        form_data.append(key, stateFilm[key]);
      }
      console.log(stateFilm[key]);
    }
    if (state.checkfilm) {
      console.log("add");
      DashBoardAddfilm(form_data);
    } else {
      console.log("edit");
      DashboardEditFilm(form_data);
    }
    // console.log(form_data);
  };
  const DashboardDeletePhim = (maPhim) => {
    DashboardDeleteFilm(maPhim);
  };
  const handleDateFilm = (e) => {
    console.log(e.target.value);
    dispatch(DashboarCinemaFilmFectch(e.target.value));
  };
  const signOut = () => {
    localStorage.removeItem("User");
    localStorage.removeItem("UserAdmin");
    window.location.reload();
  };
  if (loading) {
    return <Loading />;
  }
  if (loadingFilm) {
    return <Loading />;
  }
  return (
    <div className="main-panel admin__dashboard">
      {/* Navbar */}
      <div>
        <div
          className="modal fade "
          id="DateFilmModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl backIOT">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  T???o l???ch chi???u
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  // onClick={closeDate}
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="mb-3 col">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Ch???n H??? Th???ng r???p
                      </label>
                      <br />
                      <select
                        defaultValue=""
                        onChange={handleDateFilm}
                        id="heThongRap"
                      >
                        <option></option>
                        <option value="CGV">CGV</option>
                        <option value="BHDStar">BHD Star Cineplex</option>
                        <option value="CineStar">CineStar</option>
                        <option value="Galaxy">Galaxy Cinema</option>
                        <option value="LotteCinima">Lotte Cinema</option>
                        <option value="MegaGS">MegaGS</option>
                      </select>
                    </div>
                    <div className="mb-3 col">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Ch???n C???m R???p
                      </label>
                      <br />
                      <select
                        defaultValue=""
                        onChange={handleChangeCumRap}
                        id="cumRap"
                      >
                        <option value="">Ch???n C???m R???p</option>
                        {renderCumRap()}
                      </select>
                    </div>
                    <div className="mb-3 col">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Ch???n R???p
                      </label>
                      <br />
                      <select defaultValue="" onChange={handleChangeRap}>
                        <option value="">Ch???n R???p</option>
                        {renderRap()}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col">
                      <label htmlFor="message-text" className="col-form-label">
                        Ch???n Ng??y Kh???i Chi???u
                      </label>
                      <br />
                      <input
                        className="text-center"
                        type="datetime-local"
                        name="ngayKhoiChieu"
                        onChange={handleChangeTime}
                      />
                    </div>

                    <div className="mb-3 col">
                      <label htmlFor="message-text" className="col-form-label">
                        Ch???n Th???i l?????ng
                      </label>
                      <div>120p</div>
                    </div>
                    <div className="mb-3 col">
                      <label htmlFor="message-text" className="col-form-label">
                        Gi?? v??
                      </label>
                      <br />
                      <input type="number" onChange={handleChangeGiaVe} />
                    </div>
                  </div>
                </form>
                <label>L???c L???ch Chi???u </label>
                <select
                  defaultValue=""
                  onChange={handleChangeSearch}
                  id="selectDate"
                >
                  <option value="">T???t C???</option>
                  <option value="CGV">CGV</option>
                  <option value="BHDStar">BHD Star Cineplex</option>
                  <option value="CineStar">CineStar</option>
                  <option value="Galaxy">Galaxy Cinema</option>
                  <option value="LotteCinima">Lotte Cinema</option>
                  <option value="MegaGS">MegaGS</option>
                </select>
                <div className="card-body table-full-width table-responsive table__showtime">
                  <table className="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="showtime__id">M?? L???ch Chi???u</th>
                        <th className="showtime__cinemas">H??? Th???ng R???p</th>
                        <th className="showtime__cinema">C???m r???p</th>
                        <th className="showtime__day">Ng??y Gi??? Chi???u</th>
                        <th className="showtime__price">Gi?? V??</th>
                        <th className="showtime__time">Th???i L?????ng Phim</th>
                      </tr>
                    </thead>
                    <tbody className="tbodyList1">{renderDate()}</tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={submitDate}
                >
                  T???o l???ch chi???u
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
        <div className="container-fluid">
          <div class="alert alert-primary alertadmin" role="alert">
            {renderAler()}
          </div>
          {/* <a className="navbar-brand" href="#pablo">
            {" "}
            Table List{" "}
          </a> */}
          {/* <button
            href
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar burger-lines" />
            <span className="navbar-toggler-bar burger-lines" />
            <span className="navbar-toggler-bar burger-lines" />
          </button> */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
          >
            <ul className="navbar-nav ml-auto d-flex align-items-center">
              <li className="nav-item">{renderUser()}</li>
              <li className="nav-item">
                <a className="nav-link" onClick={signOut}>
                  <span className="no-icon">Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      <div className="content1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 dashboard__user">
              <div className="card strpied-tabled-with-hover">
                <div>
                  <div
                    className="modal fade"
                    id="exampleUser"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog backIOT">
                      <div className="modal-content backIOT">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Th??m ng?????i d??ng
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleSubmitUser} id="myForm">
                            {/* <h3 className="text-center">
                              TH??M PHIM M???I - CYBERSOFT.EDU.VN
                            </h3> */}

                            <div className="form-group">
                              <label>T??i Kho???n</label>
                              <input
                                name="taiKhoan"
                                className="form-control backIOT1"
                                value={stateUser.taiKhoan}
                                onChange={handleChangeUser}
                              />
                            </div>
                            <div className="form-group">
                              <label>M???t Kh???u</label>
                              <input
                                value={stateUser.matKhau}
                                name="matKhau"
                                className="form-control backIOT1"
                                onChange={handleChangeUser}
                              />
                            </div>
                            <div className="form-group">
                              <label>H??? V?? T??n</label>
                              <input
                                name="hoTen"
                                value={stateUser.hoTen}
                                className="form-control backIOT1"
                                onChange={handleChangeUser}
                              />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                name="email"
                                value={stateUser.email}
                                className="form-control backIOT1"
                                onChange={handleChangeUser}
                              />
                            </div>

                            <div className="form-group">
                              <label>S??? DT</label>
                              <input
                                name="soDt"
                                value={stateUser.soDt}
                                className="form-control backIOT1"
                                onChange={handleChangeUser}
                              />
                            </div>
                            <div className="form-group">
                              <label>Lo???i Ng?????i D??ng</label>
                              <br />
                              <select
                                id="cars"
                                name="maLoaiNguoiDung"
                                onChange={handleChangeUser}
                                value={stateUser.maLoaiNguoiDung}
                                className="backIOT1"
                              >
                                <option value="KhachHang">Kh??ch H??ng</option>
                                <option value="QuanTri">ADMIN</option>
                              </select>
                            </div>

                            <button
                              type="submit"
                              className="form-control modal__button backIOT1"
                            >
                              Th??m
                            </button>
                          </form>
                        </div>
                        {/* <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content backIOT">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Th??m phim
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleSubmit}>
                            {/* <h3 className="text-center">
                              TH??M PHIM M???I - CYBERSOFT.EDU.VN
                            </h3> */}

                            <div className="form-group">
                              <label>M?? phim</label>
                              <input
                                name="maPhim"
                                className="form-control"
                                onChange={handleChange}
                                value={stateFilm.maPhim}
                              />
                            </div>
                            <div className="form-group">
                              <label>T??n phim</label>
                              <input
                                name="tenPhim"
                                className="form-control"
                                onChange={handleChange}
                                value={stateFilm.tenPhim}
                              />
                            </div>
                            <div className="form-group">
                              <label>Trailer</label>
                              <input
                                name="trailer"
                                className="form-control"
                                onChange={handleChange}
                                value={stateFilm.trailer}
                              />
                            </div>
                            <div className="form-group">
                              <label>H??nh ???nh</label>
                              <input
                                type="file"
                                name="hinhAnh"
                                className="form-control"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>M?? t???</label>
                              <input
                                name="moTa"
                                className="form-control"
                                onChange={handleChange}
                                value={stateFilm.moTa}
                              />
                            </div>
                            <div className="form-group">
                              <label>M?? nh??m</label>
                              <input
                                name="maNhom"
                                value="GP01"
                                className="form-control"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>Ng??y Kh???i Chi???u</label>
                              <input
                                name="ngayKhoiChieu"
                                type="datetime-local"
                                className="form-control"
                                value={stateFilm.ngayKhoiChieu}
                                onChange={handleChange}
                              />
                            </div>
                            <button
                              type="submit"
                              className="form-control modal__button"
                            >
                              Th??m
                            </button>
                          </form>
                        </div>
                        {/* <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Th??m
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-header ">
                  <h4 className="card-title">Qu???n l?? ng?????i d??ng</h4>
                  <div className="card-header__content">
                    {" "}
                    <input
                      className="backIOT1"
                      type="text"
                      onChange={handleInputChange}
                      placeholder="Nh???p t??n t??i kho???n c???n t??m"
                    />
                    <button
                      type="button"
                      className="btn btn-primary backIOT1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleUser"
                      data-bs-whatever="@mdo"
                      onClick={ClearState}
                    >
                      Th??m Ng?????i D??ng
                    </button>
                  </div>
                </div>
                <div className="card-body table-full-width table-responsive">
                  <table className="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="table__id">ID</th>
                        <th className="showtime__cinemas">T??i Kho???n</th>
                        <th className="table__password">M???t Kh???u</th>
                        <th className="table__name">H??? V?? T??n</th>
                        <th className="table__email">Email</th>
                        <th className="table__phone">SDT</th>
                        <th className="table__type">Lo???i</th>
                        <th className="table__action">T??c V???</th>
                      </tr>
                    </thead>
                    <tbody className="tbodyList">{renderListUSer()}</tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12 dashboard__movie">
              <div className="card card-plain table-plain-bg">
                <div className="card-header ">
                  <h4 className="card-title">Qu???n l?? phim</h4>
                  <div className="card-header__content">
                    {" "}
                    <input
                      type="text"
                      onChange={handleInputChangeFilm}
                      placeholder="Nh???p t??n phim c???n t??m"
                    />
                    <button
                      type="button"
                      className="btn btn-primary backIOT1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                      onClick={clearFilm}
                    >
                      Th??m Phim
                    </button>
                  </div>
                </div>
                <div className="card-body table-full-width table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="tableMovie__id">ID</th>
                        <th className="tableMovie__name">T??n phim</th>
                        <th className="tableMovie__img">H??nh ???nh</th>
                        <th className="tableMovie__info">M?? T???</th>
                        <th className="tableMovie__day">Ng??y Kh???i Chi???u</th>
                        <th className="tableMovie__action2">T??c v???</th>
                      </tr>
                    </thead>
                    <tbody className="tbodyList">{renderListFilm()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
