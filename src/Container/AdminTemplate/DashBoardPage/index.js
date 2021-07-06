import React, { useState } from "react";
import "./css.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DashboardFectch,
  DashboardFilmFectch,
  DashboardAddUser,
  DashboardDeleteUser,
  DashboardEditUser,
  DashBoardAddfilm,
  DashboardDeleteFilm,
  DashboardEditFilm,
} from "./Modules/actions";
import Loading from "../../../Components/Loading";
import axios from "axios";

export default function DashBoardPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.DashBoardReducer.loading);
  const data = useSelector((state) => state.DashBoardReducer.data);
  const loadingFilm = useSelector(
    (state) => state.DashBoardReducer.loadingFilm
  );
  const dataFilm = useSelector((state) => state.DashBoardReducer.dataFilm);
  const [stateFilm, setstateFilm] = useState({
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP01",
    ngayKhoiChieu: "",
  });
  const [state, setState] = useState({
    search: "",
    searchFilm: "",
    check: true,
    checkfilm: true,
  });
  const DashboardDelete = (taiKhoan) => {
    DashboardDeleteUser(taiKhoan);
    console.log(taiKhoan);
  };

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
  const renderListUSer = () => {
    let dataSearch = data.filter((item) => {
      return item.taiKhoan.toLowerCase().includes(state.search.toLowerCase());
    });

    return dataSearch.map((item, i) => {
      return (
        <tr>
          <td className="table__id">{i}</td>
          <td className="table__account">{item.taiKhoan}</td>
          <td className="table__password">{item.matKhau}</td>
          <td className="table__name">{item.hoTen}</td>
          <td className="table__email">{item.email}</td>
          <td className="table__phone">{item.soDt}</td>
          <td className="table__type">{item.maLoaiNguoiDung}</td>
          <td className="table__action">
            <div className="actionButtons">
              <button
                className="btn btn-danger"
                onClick={() => {
                  DashboardDelete(item.taiKhoan);
                }}
              >
                Xóa
              </button>
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleUser"
                data-bs-whatever="@mdo"
                onClick={() => {
                  editUser(item);
                }}
              >
                Chỉnh Sửa
              </button>
            </div>
          </td>
        </tr>
      );
    });
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
                className="btn btn-danger"
                onClick={() => {
                  DashboardDeletePhim(item.maPhim);
                }}
              >
                Xóa
              </button>
              <button
                className="btn btn-dark"
                onClick={() => {
                  EditFilm(item);
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Chỉnh Sửa
              </button>
              <button className="btn btn-dark">Tạo Lịch Chiếu </button>
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

  const handleChangeUser = (e) => {
    setStateUser({ ...stateUser, [e.target.name]: e.target.value });
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (state.check) {
      dispatch(DashboardAddUser(stateUser));
    } else {
      DashboardEditUser(stateUser);
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
            date.getMonth() +
            "/" +
            date.getFullYear();
        } else if (date.getMonth() < 10) {
          date1 =
            date.getDate() +
            "/" +
            "0" +
            date.getMonth() +
            "/" +
            date.getFullYear();
        } else {
          date1 = date.getDate() + date.getMonth() + date.getFullYear();
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

      <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
        <div className="container-fluid">
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
                          <form onSubmit={handleSubmitUser} id="myForm">
                            <h3 className="text-center">
                              THÊM PHIM MỚI - CYBERSOFT.EDU.VN
                            </h3>

                            <div className="form-group">
                              <label>Tài Khoản</label>
                              <input
                                name="taiKhoan"
                                className="form-control"
                                value={stateUser.taiKhoan}
                                onChange={handleChangeUser}
                              />
                            </div>
                            <div className="form-group">
                              <label>Mật Khẩu</label>
                              <input
                                value={stateUser.matKhau}
                                name="matKhau"
                                className="form-control"
                                onChange={handleChangeUser}
                              />
                            </div>
                            <div className="form-group">
                              <label>Họ Và Tên</label>
                              <input
                                name="hoTen"
                                value={stateUser.hoTen}
                                className="form-control"
                                onChange={handleChangeUser}
                              />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                name="email"
                                value={stateUser.email}
                                className="form-control"
                                onChange={handleChangeUser}
                              />
                            </div>

                            <div className="form-group">
                              <label>Số DT</label>
                              <input
                                name="soDt"
                                value={stateUser.soDt}
                                className="form-control"
                                onChange={handleChangeUser}
                              />
                            </div>
                            <div className="form-group">
                              <label>Loại Người Dùng</label>
                              <select
                                id="cars"
                                name="maLoaiNguoiDung"
                                onChange={handleChangeUser}
                                value={stateUser.maLoaiNguoiDung}
                              >
                                <option value="KhachHang">Khách Hàng</option>
                                <option value="QuanTri">ADMIN</option>
                              </select>
                            </div>

                            <button type="submit" className="form-control">
                              Submit
                            </button>
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
                        </div>
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
                          <form onSubmit={handleSubmit}>
                            <h3 className="text-center">
                              THÊM PHIM MỚI - CYBERSOFT.EDU.VN
                            </h3>

                            <div className="form-group">
                              <label>Mã phim</label>
                              <input
                                name="maPhim"
                                className="form-control"
                                onChange={handleChange}
                                value={stateFilm.maPhim}
                              />
                            </div>
                            <div className="form-group">
                              <label>Tên phim</label>
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
                              <label>Hình ảnh</label>
                              <input
                                type="file"
                                name="hinhAnh"
                                className="form-control"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>Mô tả</label>
                              <input
                                name="moTa"
                                className="form-control"
                                onChange={handleChange}
                                value={stateFilm.moTa}
                              />
                            </div>
                            <div className="form-group">
                              <label>Mã nhóm</label>
                              <input
                                name="maNhom"
                                value="GP01"
                                className="form-control"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>Ngày Khởi Chiếu</label>
                              <input
                                name="ngayKhoiChieu"
                                type="datetime-local"
                                className="form-control"
                                value={stateFilm.ngayKhoiChieu}
                                onChange={handleChange}
                              />
                            </div>
                            <button type="submit" className="form-control">
                              Submit
                            </button>
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
                          <button type="button" className="btn btn-primary">
                            Send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-header ">
                  <h4 className="card-title">Quản lý người dùng</h4>
                  <div className="card-header__content">
                    {" "}
                    <input
                      type="text"
                      onChange={handleInputChange}
                      placeholder="Nhập tên tài khoản cần tìm"
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleUser"
                      data-bs-whatever="@mdo"
                    >
                      Thêm Người Dùng
                    </button>
                  </div>
                </div>
                <div className="card-body table-full-width table-responsive">
                  <table className="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="table__id">ID</th>
                        <th className="table__account">Tài Khoản</th>
                        <th className="table__password">Mật Khẩu</th>
                        <th className="table__name">Họ Và Tên</th>
                        <th className="table__email">Email</th>
                        <th className="table__phone">SDT</th>
                        <th className="table__type">Loại</th>
                        <th className="table__action">Tác Vụ</th>
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
                  <h4 className="card-title">Quản lý phim</h4>
                  <div className="card-header__content">
                    {" "}
                    <input
                      type="text"
                      onChange={handleInputChangeFilm}
                      placeholder="Nhập tên phim cần tìm"
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      Thêm Phim
                    </button>
                  </div>
                </div>
                <div className="card-body table-full-width table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="tableMovie__id">ID</th>
                        <th className="tableMovie__name">Tên phim</th>
                        <th className="tableMovie__img">Hình Ảnh</th>
                        <th className="tableMovie__info">Mô Tả</th>
                        <th className="tableMovie__day">Ngày Khởi Chiếu</th>
                        <th className="tableMovie__action2">Tác vụ</th>
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
