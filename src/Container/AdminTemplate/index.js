import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBarAdmin from "../../Components/NavBarAdmin";
function LayoutAdmin(props) {
  return (
    <>
      <NavBarAdmin />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsComponent} />
            </LayoutAdmin>
          );
        }
        if (localStorage.getItem("User")) {
          alert("Bạn không có  Quyền, Hãy Đăng Nhập Bằng Tài Khoản Khác");
          return <Redirect to="/" />;
        }
        //Đá về trang Auth
        alert("Vui Lòng Đăng Nhập");
        return <Redirect to="/login" />;
      }}
    />
  );
}
