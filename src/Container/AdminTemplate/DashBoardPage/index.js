import React, { useState } from "react";
import "./css.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardFectch, DashboardFilmFectch } from "./Modules/actions";
import Loading from "../../../Components/Loading";
export default function DashBoardPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.DashBoardReducer.loading);
  const data = useSelector((state) => state.DashBoardReducer.data);
  const loadingFilm = useSelector(
    (state) => state.DashBoardReducer.loadingFilm
  );
  const dataFilm = useSelector((state) => state.DashBoardReducer.dataFilm);
  const [state, setState] = useState({
    search: "",
    searchFilm: "",
  });
  useEffect(() => {
    dispatch(DashboardFectch());
    dispatch(DashboardFilmFectch());
  }, []);
  const handleInputChangeFilm = (e) => {
    console.log(e.target.value);
    setState({ ...state, searchFilm: e.target.value });
  };
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setState({ ...state, search: e.target.value });
  };
  const renderUser = () => {
    if (localStorage.getItem("UserAdmin")) {
      console.log();
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
    console.log(dataSearch);
    return dataSearch.map((item, i) => {
      return (
        <tr>
          <td className="idfi">{i}</td>
          <td>{item.taiKhoan}</td>
          <td>{item.matKhau}</td>
          <td>{item.hoTen}</td>
          <td>{item.email}</td>
          <td>{item.soDt}</td>
          <td className="LastTd d-flex align-items-center">
            {item.maLoaiNguoiDung}
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
    console.log(dataSearch);
    return dataSearch.map((item, i) => {
      return (
        <tr>
          <td className="idfi">{i}</td>
          <td>{item.tenPhim}</td>
          <td>
            {" "}
            <img src={item.hinhAnh} className="imgDas"></img>
          </td>
          <td>{item.moTa}</td>
          <td className="d-flex align-items-center">{item.ngayKhoiChieu}</td>
          {/* <td>{item.soDt}</td>
          <td className="LastTd">{item.maLoaiNguoiDung}</td> */}
        </tr>
      );
    });
  };
  const handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      this.setState({ hinhAnh: e.target.files[0] }, () => {
        console.log(this.state);
      });
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {
        console.log(this.state);
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in this.state) {
      form_data.append(key, this.state[key]);
    }

    axios({
      url: "http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh",
      method: "POST",
      data: form_data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Thêm Phim
        </button>

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
                        <th className="idFii">ID</th>
                        <th>Tài Khoản</th>
                        <th>Mật Khẩu</th>
                        <th>Họ Và Tên</th>
                        <th>Email</th>
                        <th>SDT</th>
                        <th>Loại</th>
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
                </div>
                <div className="card-body table-full-width table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="idFi">ID</th>
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
