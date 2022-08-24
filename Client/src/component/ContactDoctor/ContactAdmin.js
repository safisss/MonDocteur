import React, { useRef } from "react";
import './contactDoctor.css';
import DashboardDoctor from '../DashboardDoctor/DashboardDoctor';
import emailjs from "@emailjs/browser";
import { useState } from "react";
import swal from "sweetalert";

const ContactAdmin = () => {
  const [messages, setMessages] = useState([
    {
      VotreNom: "",
      Email: "",
      VotreSujet: "",
      VotreMessage: "",
    },
  ]);

const [show, setShow] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ag6xo4s",
        "template_6wlkrd8",
        form.current,
        "kkzq1bb_dptBrnUEW"
      )
      .then(
        (result) => {
          if (result) {
            swal("Sent!", "", "success")
              .then(() => {
                setShow(true);
              })
              .catch((err) => console.log(err));
            setMessages([{}]);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div>
      <DashboardDoctor />
      <div className="contactbox">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="inputsDr"
            placeholder="votre nom"
            name="user_name"
          />
          <input
            type="text"
            className="inputsDr"
            placeholder="votre Email"
            name="user_email"
          />
          <input
            type="text"
            className="inputsDr"
            placeholder="Sujet"
            name="Sujet"
          />
          <textarea
            type="text"
            className="inputsDr textareaMsg"
            placeholder="Message..."
            name="message"
          ></textarea>
          <button type="submit" className="btnDr" value="Send">
            Envoyer Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactAdmin;