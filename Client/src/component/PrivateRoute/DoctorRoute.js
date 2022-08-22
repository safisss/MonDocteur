import { Component } from "@fullcalendar/core";
import React from "react";
import { Route, Redirect } from "react-router-dom";

function DoctorRoute({ Component: component, ...rest }) {
  const isLoggedIn = localStorage.getItem("docToken");
  // let isLoggedIn = false;
  // let isUser = false;
  const isDoctor = localStorage.getItem("isDoctor");
  const isActivated = localStorage.getItem("isActivated");
  if (isLoggedIn && isDoctor.includes("doctor") && isActivated.includes("Active")) {
    return (
      <Route
        {...rest}
        render={(routerData) => <Component {...rest} {...routerData} />}
      />
    );
  } else {
    return <Redirect to="/AuthentificationDoctor" />;
  }
}

export default DoctorRoute;
