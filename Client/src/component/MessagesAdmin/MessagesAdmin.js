import React from "react";
import "./messagesAdmin.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardAdmin from "../DashboardAdmin/DashboardAdmin";
const MessagesAdmin = () => {
  const [messages, setMessages] = useState([
    {
      VotreNom: "",
      Email: "",
      VotreSujet: "",
      VotreMessage: "",
    },
  ]);

  // useEffect(() => {
  //   fetch("/contact")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setMessages(jsonRes));
  // });

  return (
    <div>
      <div className="tableMsgs">
        <div class="tableMessag">
          <table className="tablemsg">
            <thead className="tablehead">
              <tr className="tableheadtrr">
                {/* <th className="tableheadthh" scope="col">
                  #
                </th> */}
                <th className="tableheadthh" scope="col">
                  Nom Complet
                </th>
                <th className="tableheadthh" scope="col">
                  Email
                </th>
                <th className="tableheadthh" scope="col">
                  Sujet
                </th>
                <th className="tableheadthh" scope="col">
                  Message
                </th>
                <th className="tableheadthh" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="tablebod">
              {messages.map((message, index) => (
                <>
                  <tr className="tableheadtrr">
                    {/* <td  className="tableheadtdd">
                      {index + 1}
                    </td> */}
                    <td className="tableheadtdd">{message.VotreNom}</td>
                    <td className="tableheadtdd">{message.Email}</td>
                    <td className="tableheadtdd">{message.VotreSujet}</td>
                    <td className="tableheadtdd">{message.VotreMessage}</td>

                    <span className="actions_btn">
                      <button className="btnSuppMsg">Remove</button>
                    </span>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DashboardAdmin />
    </div>
  );
};

export default MessagesAdmin;
