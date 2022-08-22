import { Component } from "@fullcalendar/core";
import React from "react";
import { Route, Redirect } from "react-router-dom";

function UserRoute({ Component: component, ...rest }) {
  const isLoggedIn = localStorage.getItem("token");
  // let isLoggedIn = false;
  // let isUser = false;
  const isUser = localStorage.getItem("isUser");
  if (isLoggedIn && isUser.includes("user")) {
    return (
      <Route
        {...rest}
        render={(routerData) => <Component {...rest} {...routerData} />}
      />
    );
  } else {
    return <Redirect to="/AuthentificationUser" />;
  }
}

export default UserRoute;