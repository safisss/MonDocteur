import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import swal from "sweetalert";

const Contact = () => {


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
    <>
      <NavBar />

      <div className="drop">
        <div className="containerHomeContact">
          <h2 className="drop-title">
            <span>Laissez-moi votre </span>message
          </h2>
          <form className="messageContact" ref={form} onSubmit={sendEmail}>
            <div className="FormInput">
              <input
                type="text"
                placeholder="Votre Nom"
                // onChange={handleChange}
                required
                className="inputsContact"
                // value={input.VotreNom}
                name="user_name"
              />
              <input
                type="email"
                placeholder="Votre Email"
                // onChange={handleChange}
                name="user_email"
                // required
                className="inputsContact"
                // value={input.Email}
              />
            </div>
            <input
              type="text"
              className="inputsContact"
              placeholder="Votre Sujet"
              // onChange={handleChange}
              required
              // value={input.VotreSujet}
              name="Sujet"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Votre Message..."
              // onChange={handleChange}
              name="message"
              id="TextareaBox"
              required
              // className="inputsContact"
              // value={input.VotreMessage}
            ></textarea>
            <input
              type="submit"
              value="Envoyer Message"
              // onClick={handleClick}
              className="inputsContact"
              
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
