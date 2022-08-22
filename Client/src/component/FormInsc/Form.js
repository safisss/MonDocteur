import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div>
      <hr />
      <section className="Form">
        <div className="form-container">
          <form action="contact-form">
            <h2>CONTACT</h2>
            <input type="text" id="name" placeholder="FullName" /> <br />
            <input type="email" id="email" placeholder="Enter you Email" />{" "}
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            <br />
            <input type="text" id="subject" placeholder="Subject" /> <br />
            <textarea
              id="message"
              placeholder="Please write your message here ..."
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <input type="submit" className="submit" value="Send message" />
            <br />
            <input type="reset" className="submit" value="Reset message" />
            <br />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;