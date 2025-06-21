import React from "react";
import bg from "../../assets/profile2.png";
import resume from "../../assets/mywebresume.pdf";
// import "../../components/contact/Contact.css";
import Facebook from "../../assets/fb1.png";
import linkedin2 from "../../assets/linkedin (1).png";
import github from "../../assets/github.png";
import naukri from "../../assets/naukri2.png";
import "./intro.css";
const Intro = () => {
  return (
    <section id="intro">
      <img src={bg} alt="profile" className="bg" />
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          {" "}
          I'm <span className="introName">Gaurav</span> <br />
          Web App developer
        </span>
        <p className="intropara">
          I am MERN Stack developer looking for contrubuted to <br />
          your insituted by using my Skills.
        </p>{" "}
        <a href={resume} download="MyExampleDoc" target="_blank" rel="noreferrer">
          {" "}
          <button type="button" className="myResume">
            {" "}
            Dowloaded My Resume
          </button>
        </a>
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
      </div>
    </section>
  );
};

export default Intro;
