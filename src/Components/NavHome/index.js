import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./css.css";

const renderLogin = () => {
  if (localStorage.getItem("User")) {
    return (
      <ul>
        <li>
          <NavLink to="/user">
            {/* <i className="fas fa-user-circle" /> */}
            <i class="fa fa-user"></i>
            <span>{JSON.parse(localStorage.getItem("User")).hoTen}</span>
          </NavLink>
        </li>
        <li>
          <a onClick={signOut}>Đăng xuất</a>
        </li>
      </ul>
    );
  }
  if (localStorage.getItem("UserAdmin")) {
    console.log();
    return (
      <ul>
        <li>
          <NavLink to="/user">
            <i class="fas fa-user-shield"></i>
            <span>{JSON.parse(localStorage.getItem("UserAdmin")).hoTen}</span>
          </NavLink>
        </li>
        <li>
          <a onClick={signOut}>Đăng xuất</a>
        </li>
      </ul>
    );
  }

  return (
    <ul>
      <li>
        <NavLink to="/login">Đăng Nhập</NavLink>
      </li>
      <li>
        <NavLink to="/signUp">Đăng Kí</NavLink>
      </li>
    </ul>
  );
};
const signOut = () => {
  localStorage.removeItem("User");
  localStorage.removeItem("UserAdmin");
  window.location.reload();
};
const EnterPress = (e) => {
  if (e.code === "Enter") {
    console.log("enter roi do");
  }
};

export default function NavHome(props) {
  const data = useSelector((state) => state.Film_Reducer.data);
  const [state, setstate] = useState({
    search: "`",
  });
  const handleChange = (e) => {
    if (e.target.value == "") {
      setstate({ ...state, search: "`" });
    } else {
      setstate({ ...state, search: e.target.value });
    }
  };
  const renderSearch = () => {
    if (data != null) {
      const data1 = data.filter((item) => {
        return item.tenPhim.toLowerCase().includes(state.search.toLowerCase());
      });
      return data1.map((item) => {
        return (
          <div className="nav-searchItem">
            <div className="nav-searchItem__image  col-4">
              <img src={item.hinhAnh}></img>
            </div>
            <div className="nav-searchItem__info col-8">
              <p className="nav-searchItem__title">
                {<Link to={`/detailMovie/${item.maPhim}`}>{item.tenPhim}</Link>}
              </p>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div className="navContainer">
      <div className="nav-left">
        <img src="./img/logo.png" />
      </div>
      <div className="nav-center">
        <ul>
          <li className="pt-1">
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li className="pt-1">
            <a href="#">Lịch chiếu </a>
          </li>
          <li className="pt-1">
            <a href="#">Cụm rạp </a>
          </li>
          <li className="nav-search">
            <input onKeyPress={EnterPress} onChange={handleChange} />
            <i className="fas fa-search iconSearch" />
            <div className="nav-searchContent">
              {renderSearch()}
              <div className="nav-searchError nav-searchItem">
                <span>Không tìm thấy kết quả trả về cho từ khóa "abc"</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="nav-right">{renderLogin()}</div>
    </div>
  );
}
