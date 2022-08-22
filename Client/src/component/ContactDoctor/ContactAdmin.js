import React, { useRef } from "react";
import './contactDoctor.css';
import DashboardDoctor from '../DashboardDoctor/DashboardDoctor';
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactAdmin = () => {
  const [messages, setMessages] = useState([
    {
      VotreNom: "",
      Email: "",
      VotreSujet: "",
      VotreMessage: "",
    },
  ]);

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
          console.log(result.text);
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