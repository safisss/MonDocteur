import { Component } from "@fullcalendar/core";
import React from "react";
import { Route, Redirect } from "react-router-dom";

function AdminRoute({ Component: component, ...rest }) {
  const isLoggedIn = localStorage.getItem("adminToken");
  const isAdmin = localStorage.getItem("isAdmin");
  if (isLoggedIn && isAdmin.includes("admin")) {
    return (
      <Route
        {...rest}
        render={(routerData) => <Component {...rest} {...routerData} />}
      />
    );
  } else {
    return <Redirect to="/AuthAdmin" />;
  }
}

export default AdminRoute;
