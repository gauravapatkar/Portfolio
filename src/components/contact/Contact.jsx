import React, { useRef } from "react";
import "./Contact.css";
import Facebook from "../../assets/fb1.png";
import linkedin2 from "../../assets/linkedin (1).png";
import github from "../../assets/github.png";
import naukri from "../../assets/naukri2.png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bowfu69", "template_v1woo98", form.current, {
        publicKey: "pD6ELPwXpfkYeLtb2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactTitle">Contact Me</h1>
      <span className="contactDesc">
        You can contact me on my whatsapp No. 9309192992 or Please fill out the
        form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder=" Your Name"
          name="from_name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
          required
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>

        <div className="links">
          <a href="http://www.linkedin.com/in/gaurav-patkar-140640204/">
            <img src={linkedin2} alt="linkedin" className="link" />
          </a>
          <a href="http://github.com/gauravapatkar">
            {" "}
            <img src={github} alt="github2" className="link" />
          </a>
          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid">
            <img src={naukri} alt="naukri" className="link" />
          </a>
          <a href="https://www.facebook.com/gaurav.patkar.984">
            {" "}
            <img src={Facebook} alt="Facebook" className="link" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
