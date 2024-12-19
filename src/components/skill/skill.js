import React from "react";
import "./skill.css";
import UIDesign from "../../assets/skillicon/front-end.png";
import Backend from "../../assets/skillicon/development.png";
import DBMS from "../../assets/skillicon/dbms.png";
import PDImg from "../../assets/bio.png";
import Educn from "../../assets/educn.png";
import interS from "../../assets/cert/interS.jpg";
import reaPaper from "../../assets/cert/reaPaper.jpg";
import apti from "../../assets/cert/apti.jpg";
import avish from "../../assets/cert/avish.jpg";

const Skill = () => {
  return (
    <section id="skills">
      <spam className="skillTitle">--- About Me ---</spam>
      <span className="skillsDesc">
        Hello! My name is Gaurav Anand Patkar, and I am a passionate front-end
        developer with a strong foundation in creating user-friendly and
        visually appealing web interfaces. Having recently graduated with a
        degree in B.E. in Electronics and Telecommunication Engineering, I’ve
        honed my skills in HTML, CSS, JavaScript, and modern frameworks like
        React.js. During my academic journey, I worked on various projects,
        including this Portfolio ,ToDoList, calculator, Netflix,that you can
        find in my project section, where I focused on responsive design,
        accessibility, and performance optimization. I look forward to growing
        as a professional, working in your institute and tackling exciting
        challenges in the tech industry.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarsText">
            <h2> Skills:-</h2>
            <div className="skills1">
              <div className="skiilBars">
                <h3 className="Skillhead">
                  {" "}
                  <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                  Fronted-End -{" "}
                </h3>
                <span className="WSkills">
                  {" "}
                  React.js , web technologies like JavaScript ,CSS3 , Bootstrap
                  ,HTML5.
                </span>
              </div>
              <div className="skiilBars">
                <h3 className="SkillMedium">
                  {" "}
                  <img src={DBMS} alt="UIDesign" className="skillBarImg" />
                  DBMS – <span className="DBMS">MongoDB</span>
                </h3>
              </div>
              <div className="skiilBars">
                <h3 className="Skillhead">
                  {" "}
                  <img src={Backend} alt="UIDesign" className="skillBarImg" />
                  Backend technologies –{" "}
                </h3>
                <span className="WSkills">Node.js ,Express.js.</span>
              </div>
            </div>
          </div>
          <div className="skillBar1">
            <div className="skillBarsText">
              {" "}
              <h2> CERTIFICATES :- </h2>
              <h3 className="Skillhead">
                Web development – Internshala.
                <img className="certImg" src={interS} alt="cert-interS" />
              </h3>
              <h3 className="Skillhead">
                Paper Publication Certificated JETIRJournal.
                <img
                  className="certImg"
                  src={reaPaper}
                  alt="cert-reaPaper"
                />{" "}
              </h3>
              <h3 className="Skillhead">
                Aptitude certificate – Alicon Soluction.
                <img className="certImg" src={apti} alt="cert-apti" />
              </h3>
              <h3 className="Skillhead">
                Project Presentation – University of Mumbai
                <img className="certImg" src={avish} alt="cert-avish" />
              </h3>
            </div>
          </div>
        </div>
        <div className="otherDteails">
          <div className="PD">
            <h2 className="ODHead">
              {" "}
              <img src={PDImg} alt="PDImg" className="PDImg" />
              Personal Details{" "}
            </h2>
            <div className="skillBarsText">
              <div className="PDetails">
                <div className="PDel">
                  <span>Name :- Gaurav Anand Patkar</span>
                  <span>Education : - Graduate- B.E/B.Tech(EXTC).</span>
                  <span>Mobile No. :- 9309192992.</span>
                  <span>Email Address :- gauravpatkark95@gmail.com</span>
                  <span>
                    Linkedin Profile :-{" "}
                    <a href="https://www.linkedin.com/in/gaurav-patkar-140640204/">
                      View Linkedin
                    </a>
                  </span>
                  <span>
                    Github Profile :-{" "}
                    <a href="https://github.com/gauravapatkar">View Github</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="edcun">
            <h2 className="ODHead">
              {" "}
              <img src={Educn} alt="Educn" className="Educn" />
              EDUCATION{" "}
            </h2>
            <div className="skillBarsText">
              <div className="Eduction">
                <div className="edu">
                  <h1 className="eduHead">Graduation : </h1>
                  <span>
                    • Bachelor of Engineering (B.E) - Mumbai University
                  </span>
                  <span>
                    • Branch - Electronics & Telecommunication Engineering
                  </span>
                  <span>• CGPA - 6.6 , Passout Year - 2024</span>{" "}
                  <h1 className="eduHead">Diploma . : </h1>
                  <span>
                    • Diploma in Mechanical Engineering Mumbai University
                  </span>
                  <span>• Percentage - 83.18% , Passout Year2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
