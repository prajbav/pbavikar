import React, { useState } from "react";
import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import Fade from "react-reveal";
import "../contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_portfolio";
      const templateId = "template_portfolio";
      const userId = "user_Xr5EUDkhltEXrfXF4I0tp";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };
  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = regex.test(String(email).toLowerCase());
    if (valid) {
      setEmail(email);
    } else {
      setInvalidEmail((check) => ({
        invalidEmail: !check,
      }));
    }

    //   return regex.test(String(email).toLowerCase());
  };

  return (
    <div className="section-content-container">
      <Container>
        <Fade>
          <div id="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              className={invalidEmail ? "" : "email-error"}
              onChange={(e) => setEmail(e.target.value)}
              // onBlur={(e) => isValidEmail(e.target.value)}
            />
            {invalidEmail && (
              <span className={invalidEmail ? "invisible" : ""}>
                Please enter correct email id.
              </span>
            )}
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={submit}>Send Message</button>
            <div className={emailSent ? "" : "invisible"}>
              Thank you for your message, we will be in touch in no time!
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default Contact;
