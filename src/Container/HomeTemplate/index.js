import React from "react";
import { Route } from "react-router-dom";
import NavHome from "../../Components/NavHome";

function LayoutHome(props) {
  return (
    <>
      <NavHome />
      {props.children}
    </>
  );
}
export default function HomeTemplate(props) {
  const { exact, path, Component } = props;
  return (
    <div>
      <LayoutHome>
        <Route exact={exact} path={path} component={Component} />
      </LayoutHome>
    </div>
  );
}
