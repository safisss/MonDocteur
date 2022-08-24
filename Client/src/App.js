//import logo from './logo.svg';
//import './App.css';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Contact from "./component/HomeContact/Contact";
import AuthentificationAdmin from "./component/AuthentificationAdmin/AuthentificationAdmin";
import EspaceIdentification from "./component/EspaceIdentification/EspaceIdentification";
import RegistrationUser from "./component/RegistrationUser/RegistrationUser";
import Inscription from "./component/RegistrationDoctor/Inscription";
import AuthentificationUser from "./component/AuthentificationUser/AuthentificationUser";
import MessagesAdmin from "./component/MessagesAdmin/MessagesAdmin";
import { Redirect } from "react-router-dom";
import Header from "./component/head/Header";
import Naaa from "./component/NN/Naaa";
import Docc from "./component/Doc/Docc";
// import {useJwt} from "react-jwt";

import Dashboard from "./component/DashboardApp/Dashboard";

import DashboardUtilisateur from "./component/AccueilUser/DashboardUtilisateur";
import HomeUser from "./component/HomeUser/HomeUser";
import MessageUs from "./component/ContactUser/MessageUs";
import ProfileUser from "./component/ProfilUser/ProfileUser";
import ViewCard from "./component/ViewCardsDoc/ViewCard";
import CalendrierUser from "./component/CalendrierUser/CalendrierUser";

import AuthentificationDoctor from "./component/AuthentificationDoctor/AuthentificationDoctor";

import CalendarUser from "./component/CalendarUser/CalendarUser";
import CardDoc from "./component/carddd/CardDoc";

import DashboardDoctor from "./component/DashboardDoctor/DashboardDoctor";
import HomeDoctor from "./component/HomeDoctor/HomeDoctor";
import ProfileDoctor from "./component/ProfilDoctor/ProfileDoctor";
import ContactAdmin from "./component/ContactDoctor/ContactAdmin";
import RdvDoctors from "./component/RdvAppointmentsDoctors/RdvDoctors";
import CalendrierDoctor from "./component/Calendar/CalendrierDoctor";
import { useEffect, useState } from "react";
//import { useEffect } from "react";
import DashboardAdmin from "./component/DashboardAdmin/DashboardAdmin";
import HomeAdmin from "./component/HomeAdmin/HomeAdmin";
import ComptesDoctors from "./component/AdminComptesDoctors/ComptesDoctors";
import ListUsers from "./component/ListUsersforAdminModal/ListUsers";
import ListDoctors from "./component/SearchListDoctors/ListDoctors";
import Informations from "./component/InformationsAdmin/Informations";
import Test from "./component/Test/Test";
import EditDetailsUser from "./component/ListUsersforAdminModal/EditDetailsUser";
//import { useState } from "react";
import Card from "./component/CardSearch/Card";
import r from "./component/r/r";
// import AuthentificationTest from "./component/AuthentificationTest/AuthentificationTest";
import UserRoute from "./component/PrivateRoute/UserRoute";
import DoctorRoute from "./component/PrivateRoute/DoctorRoute";
import jwt_decode from "jwt-decode";

import AdminRoute from "./component/PrivateRoute/AdminRoute";
function App() {
  //  const dispatch = useDispatch();
  //  const { user, role } = useSelector((state) => state.ReducerUser);
  //  const [userLogged, setUserLogged] = useState("");
  //  const isLoggedIn = () => {
  //    return localStorage.getItem("token") ? true : false;
  //  };
  //  useEffect(() => {
  //    if (isLoggedIn()) {
  //      setUserLogged(jwt_decode(localStorage.getItem("token")).user.Role);
  //    }
  //  }, [isLoggedIn()]);
  //  console.log(userLogged);

  //**************************************************************************************** */
  // useeffects methode ANwER
  // const dispatch = useDispatch();
  // const { user, setUser } = useSelector((state) => state.ReducerUser);
  // const [role, setRole] = useState("");
  // const isLoggedIn = () => {
  //   return ? true : false;
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setRole(jwt_decode(localStorage.getItem("token")).user.Role);
  //   }
  //   // console.log(jwt_decode(localStorage.getItem("token")));
  // }, [localStorage.getItem("token")]);
  // // console.log("decode", jwt_decode(localStorage.getItem("token")));
  // // console.log(role.includes("doctor"));
  //**************************************************************************************** */
  // const [Liste, setListeUsers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .then((res) => setListeUsers(res.data))
  //     .catch((error) => console.log(error));
  // });
  // const user = true;
  // const dispatch = useDispatch()
  // const isauth = useSelector((el) => el.ReducerUser);

  // const isdoctor = true;
  // const dispatch = useDispatch();
  // const isauth = useSelector((el) => el.ReducerUser);

  // // console.log(isauth);
  // const VerifyAccount = useSelector((el) => el.ReducerDoctor);
  // console.log(VerifyAccount);

  //  const dispatch = useDispatch();
  //  const { user, role } = useSelector((state) => state.userReducer);
  //  const [userLogged, setUserLogged] = useState("");
  //  const isAuth = () => {
  //    return localStorage.getItem("token") ? true : false;
  //  };
  //  useEffect(() => {
  //    if (isAuth()) {
  //      setUserLogged(jwt(localStorage.getItem("token")).user.role);
  //    }
  //  }, [isAuth()]);
  //  console.log(userLogged);

  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={Dashboard} />

          <Switch>
            <Route path="/contact" component={Contact} />
            <Route
              path="/EspaceIdentification"
              component={EspaceIdentification}
            />
            <Route path="/RegistrationUser" component={RegistrationUser} />
            <Route path="/Inscription" component={Inscription} />
            <Route
              path="/AuthentificationUser"
              component={AuthentificationUser}
            />
            <Route
              path="/AuthentificationDoctor"
              component={AuthentificationDoctor}
            />
            <Route path="/calendrierDoc" component={CalendrierDoctor} />
            <Route path="/r" component={r} />
            <Route path="/messagesAdmin" component={MessagesAdmin} />
            <UserRoute
              exact
              path="/DashboardUtilisateur"
              component={DashboardUtilisateur}
            />
            <UserRoute
              exact
              path="/calendrierUser"
              component={CalendrierUser}
            />
            <UserRoute exact path="/messageUs" component={MessageUs} />
            <UserRoute
              exact
              path="/profileUtilisateur"
              component={ProfileUser}
            />
            <UserRoute exact path="/homeUser" component={HomeUser} />
            <UserRoute
              exact
              path="/homeUser/viewcard/:name/:doctorId"
              component={ViewCard}
            />
            <DoctorRoute
              exact
              path="/dashboardDoctor"
              component={DashboardDoctor}
            />
            <DoctorRoute exact path="/homeDoctor" component={HomeDoctor} />
            <DoctorRoute exact path="/profileDoc" component={ProfileDoctor} />
            <DoctorRoute path="/contactAdmin" component={ContactAdmin} />
            <DoctorRoute path="/rdvDoctors" component={RdvDoctors} />
            {/* <Route
              path="/dashboardUser:_id"
              component={() => <DashboardUser authorized={true} />}
            /> */}
            //*******************************************************************
            =
            <Route exact path="/naaD" component={Naaa} />
            <Route path="/carddoc" component={CardDoc} />
            <Route path="/doc" component={Docc} />
            <Route
              exact
              path="/authentificationAdmin"
              component={AuthentificationAdmin}
            />
            <AdminRoute exact path="/homeAdmin" component={HomeAdmin} />
            <AdminRoute
              exact
              path="/comptesDoctors"
              component={ComptesDoctors}
            />
            <AdminRoute exact path="/listUsers" component={ListUsers} />
            <AdminRoute
              exact
              path="/informationsAdmins"
              component={Informations}
            />
            <Route path="/test" component={Test} />
            <Route path="/editDetailsUser" component={EditDetailsUser} />
            <Route path="/searchlistedoctors" component={ListDoctors} />
            <Route path="/card" component={Card} />
            <Route path="/CalendarUser/:doctorId" component={CalendarUser} />
            <Route path="/header" component={Header} />
      
            <AdminRoute
              exact
              path="/dashboardAdmin"
              component={DashboardAdmin}
            />
            <AdminRoute exact path="/homeAdmin" component={HomeAdmin} />
            <AdminRoute
              exact
              path="/comptesDoctors"
              component={ComptesDoctors}
            />
            <AdminRoute exact path="/listUsers" component={ListUsers} />
            <AdminRoute
              exact
              path="/informationsAdmins"
              component={Informations}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
