import React, { useState } from "react";
import DashboardUser from "../DashboardUser/DashboardUser";
import "./CalendarUser.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
const CalendarDoc = () => {
  const [show, setShow] = useState(false);
  // const [profile, setProfile] = useState({});
  const [userCalendar, setUserCalendar] = useState({});
  const [docCalendar, setDocCalendar] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { doctorId } = useParams();
  const doctors = useSelector((state) => state.ReducerUser.AllDoctors);
  // const profile = doctors.find((elt) => elt.Nom.includes(name));
  const token = localStorage.getItem("token");
  const [arg, setArg] = useState("");

  const handleChange = (e) => {
    setUserCalendar({
      ...userCalendar,
      [e.target.name]: e.target.value,
      start: arg,
      doctorId,
    });
    // console.log(arg);
  };

  /* POST/ADD Rdv from Doctor */
  const handleSave = (e) => {
    axios
      .post(`/Users/calender/${doctorId}`, userCalendar, {
        headers: {
          jwt: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.dir(err));
    handleClose();
  };

  /* Get calendar from PATIENT*/

  const calendarComponentRef = React.createRef();
  const [calendarEvents, setCalendarEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`/Users/calenderOfDoc/${doctorId}`)
      .then((res) => {
        if (res.data.data) {
          setCalendarEvents(res.data.data);
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [calendarEvents]);

  const handleDateClick = (arg) => {
    // console.log(arg.date.toString().substr(16,16).substr(0,2));
    if (
      arg.date.toString().substr(16, 16).substr(0, 2) >= "08" &&
      arg.date.toString().substr(16, 16).substr(0, 2) <= "17"
    ) {
      handleShow();
      setArg(arg.date);
    }
  };

  return (
    <div className="demo-app">
      <DashboardUser />
      <div className="demoUser-app-calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          ref={calendarComponentRef}
          //   weekends={this.state.calendarWeekends}
          events={calendarEvents}
          hiddenDays={[0]}
          dateClick={handleDateClick}
          //   slotDuration="01:00"
          minTime="08:00:00"
          maxTime="17:00:00"
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prise de rendez vous</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="title"
                placeholder="write your message here"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={(e) => {
              handleSave(e);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalendarDoc;
