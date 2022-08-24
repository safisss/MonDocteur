import React, { useRef } from "react";
import DashboardUser from "../DashboardUser/DashboardUser";
import "./messageUs.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import swal from "sweetalert";
const MessageUs = () => {
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
      <DashboardUser />

      <div className="contact-box">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="inputs"
            placeholder="votre nom"
            name="user_name"
          />

          <input
            type="email"
            className="inputs"
            placeholder="Email"
            defaultValue={show ? "" : null}
            name="user_email"
          />
          {/* <input type="email" name="user_email" value="sallemi.safa1" /> */}

          <input
            type="text"
            className="inputs"
            placeholder="Sujet"
            name="Sujet"
          />

          <textarea
            type="text"
            className="inputs textarea-msg"
            placeholder="Message pour Admin..."
            name="message"
          ></textarea>

          {/* <input type="submit" value="Send" /> */}

          <button type="submit" className="btnMsg" value="Send">
            Envoyer Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageUs;
