import React, { useState, useEffect } from "react";
import DashboardDoctor from "../DashboardDoctor/DashboardDoctor";
import "./calendrierDr.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import axios from "axios";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
const CalendrierDoctor = () => {
  const doctorId = localStorage.getItem("doctorId");
  const token = localStorage.getItem("docToken");
  const calendarComponentRef = React.createRef();

  // const handleDateClick = (arg) => {
  //   console.log(arg.date.toString().substr(16,16).substr(0,2));
  //   if (
  //     arg.date.toString().substr(16, 16).substr(0, 2) >= "08" &&
  //     arg.date.toString().substr(16, 16).substr(0, 2) <= "17"
  //   ) {
  //     if (
  //       window.confirm(
  //         "Would you like to add an event to " + arg.dateStr + " ?"
  //       ) == true
  //     ) {
  //       setCalendarEvents([
  //         ...calendarEvents,
  //         {
  //           title: "New Event",
  //           start: arg.date,
  //           allDay: arg.allDay,
  //         },
  //       ]);
  //     }
  //   } else {
  //     alert(
  //       "we Are working from 8am to 5pm , Please select date from day area with exactly time"
  //     );
  //   }
  // };
  const [calendarEvents, setCalendarEvents] = useState([
    {
      textColor: "#ff0000",
    },
  ]);
  useEffect(() => {
    axios
      .get(`/Doctors/calender`, {
        headers: {
          jwt: token,
        },
      })
      .then((res) => {
        if (res.data.calender) {
          setCalendarEvents(res.data.calender);
          // console.log(res.data.calender);
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [calendarEvents]);

  return (
    <div className="demo-app">
      <DashboardDoctor />
      <div className="demoDoc-app-calendar">
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
          // dateClick={handleDateClick}
          //   slotDuration="01:00"
          minTime="08:00:00"
          maxTime="17:00:00"
        />
      </div>
    </div>
  );
};

export default CalendrierDoctor;
