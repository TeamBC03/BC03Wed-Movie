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
} from "./Modules/actions";
import Loading from "../../../Components/Loading";
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
          <td className="idfi text-align-center">{i}</td>
          <td>{item.taiKhoan}</td>
          <td>{item.matKhau}</td>
          <td>{item.hoTen}</td>
          <td>{item.email}</td>
          <td>{item.soDt}</td>
          <td className="LastTd">{item.maLoaiNguoiDung}</td>
          <td>
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
          <td className="idfi">{item.maPhim}</td>
          <td>{item.tenPhim}</td>
          <td>
            {" "}
            <img src={item.hinhAnh} className="imgDas"></img>
          </td>
          <td>{item.moTa}</td>
          <td className="">{item.ngayKhoiChieu}</td>
          <td>
            <button className="btn btn-danger">Xóa</button>
            <button className="btn btn-dark">Chỉnh Sửa</button>
            <button className="btn btn-dark">Tạo Lịch Chiếu </button>
          </td>
          {/* <td>{item.soDt}</td>
          <td className="LastTd">{item.maLoaiNguoiDung}</td> */}
        </tr>
      );
    });
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

        console.log(date1);
        form_data.append(key, date1);
      } else {
        form_data.append(key, stateFilm[key]);
      }
    }
    // console.log(form_data);
    DashBoardAddfilm(form_data);
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
    <div className="main-panel">
      {/* Navbar */}
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleUser"
          data-bs-whatever="@mdo"
        >
          Thêm USER
        </button>

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
                    />
                  </div>
                  <div className="form-group">
                    <label>Tên phim</label>
                    <input
                      name="tenPhim"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Trailer</label>
                    <input
                      name="trailer"
                      className="form-control"
                      onChange={handleChange}
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
                    <label>Mã nhóm</label>
                    <input
                      name="ngayKhoiChieu"
                      type="datetime-local"
                      className="form-control"
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

      <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#pablo">
            {" "}
            Table List{" "}
          </a>
          <button
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
          </button>
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
            <div className="col-md-12">
              <div className="card strpied-tabled-with-hover">
                <div className="card-header ">
                  <h4 className="card-title">Striped Table with Hover</h4>
                  <p className="card-category">
                    Here is a subtitle for this table
                  </p>
                  <input type="text" onChange={handleInputChange} />
                </div>
                <div className="card-body table-full-width table-responsive">
                  <table className="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tài Khoản</th>
                        <th>Mật Khẩu</th>
                        <th>Họ Và Tên</th>
                        <th>Email</th>
                        <th>SDT</th>
                        <th>Loại</th>
                        <th>Tác Vụ</th>
                      </tr>
                    </thead>
                    <tbody className="tbodyList">{renderListUSer()}</tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-plain table-plain-bg">
                <div className="card-header ">
                  <h4 className="card-title">Table on Plain Background</h4>
                  <p className="card-category">
                    Here is a subtitle for this table
                  </p>
                  <input type="text" onChange={handleInputChangeFilm} />
                  <br />
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
                <div className="card-body table-full-width table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Country</th>
                        <th>City</th>
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
