import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import "./about.css";
import Abdullah from "./abt-img/abd.jpg";
import Ahmad from "./abt-img/ahmad.jpg";
import Fahad from "./abt-img/fahd.jpg";
import Qais from "./abt-img/qais.jpg";
import Sedra from "./abt-img/sedra.jpg";
import image from "./abt-img/SuhiabAlnji.jpg";
import Wlla from "./abt-img/walla.jpg";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          <section id="ABOUT">
            <div className="about-1">
              <div className="heading-box">
                <h1 className="about-heading"> ABOUT US </h1>
              </div>

              <p id="discription" className="fs-4">
                Here we are to inform you what is happening in the world around
                you. <br />
                All newly received or noteworthy information, especially about
                recent events you will found it here.
              </p>
              <br />
              <p id="discription2" className="fs-4">
                Here's the best devs ever, We're full stack developer under
                construction.
              </p>
            </div>
            <div id="about-2">
              <div className="content-box-lg">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="about-item text-center">
                        <img src={image} className="w-100" alt="Suhaib" />
                        <h3 className="pt-3">Suhaib Alnaji</h3>
                        <p>Computer Science</p>

                         <div className="icons-display">
                          
                         <a
                          className="about-icon"
                          href="https://github.com/SuhaibAln"
                        >
                          <GoMarkGithub />
                        </a>
                        <a
                          className="about-icon"
                          href="https://www.linkedin.com/in/suhaib-alnaji-0835181b9"
                        >
                          <FaLinkedinIn />
                        </a>
                          
                           </div>
                        
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="about-item text-center">
                        <img src={Ahmad} className="w-100" alt="Ahmad" />
                        <h3 className="pt-3">Ahmad Jubran</h3>
                        <p>Computer Engineer</p>
                        <div className="icons-display">
                        <a
                          className="about-icon"
                          href="https://github.com/ahmadjubran"
                        >
                          <GoMarkGithub />
                        </a>
                        <a
                          className="about-icon"
                          href="https://www.linkedin.com/in/ahmad-jubran-44202a168/"
                        >
                          <FaLinkedinIn />
                        </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="about-item text-center">
                        <img src={Sedra} className="w-100" alt="Sedra" />
                        <h3 className="pt-3">Sedra Al-Sabbagh</h3>
                        <p>Software Engineering</p>
                        <div className="icons-display">
                        <a
                          className="about-icon"
                          href="https://github.com/Sadrah-Alsabagh"
                        >
                          <GoMarkGithub />
                        </a>
                        <a
                          className="about-icon"
                          href="https://www.linkedin.com/in/sedra-al-sabbagh-a6987b246/"
                        >
                          <FaLinkedinIn />
                        </a></div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="about-item text-center">
                        <img src={Fahad} className="w-100" alt="Fahad" />
                        <h3 className="pt-3">Fahad Zidan</h3>
                        <p>Electrical Power Engineer</p>
                        <div className="icons-display">
                        <a
                          className="about-icon"
                          href="https://github.com/fha96"
                        >
                          <GoMarkGithub />
                        </a>
                        <a
                          className="about-icon"
                          href="https://www.linkedin.com/in/fahad-rimawe-9832a9172"
                        >
                          <FaLinkedinIn/>
                        </a></div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="about-item text-center">
                        <img src={Qais} className="w-100" alt="Qais" />
                        <h3 className="pt-3">Qais Alsgher</h3>
                        <p>Software Engineering</p>
                        <div className="icons-display">
                        <a
                          className="about-icon"
                          href="https://github.com/qais-alsgher"
                        >
                          <GoMarkGithub />
                        </a>
                        <a
                          className="about-icon"
                          href="https://www.linkedin.com/in/qais-alsgher-885902237/"
                        >
                          <FaLinkedinIn />
                        </a></div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="about-item text-center">
                        <img src={Wlla} className="w-100" alt="wlla" />
                        <h3 className="pt-3">wlla Talafha</h3>
                        <p>Electronics engineer</p>
                        <div className="icons-display">
                        <a
                          className="about-icon"
                          href="https://github.com/WllaTalafha"
                        >
                          <GoMarkGithub />
                        </a>
                        <a
                          className="about-icon"
                          href="https://www.linkedin.com/in/wlla-talafha-54b528246"
                        >
                          <FaLinkedinIn />
                        </a></div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="about-item text-center">
                        <img src={Abdullah} className="w-100" alt="Abdullah" />
                        <h3 className="pt-3">Abdullah Smadi</h3>
                        <p>Computer Science</p>
                        <div className="icons-display">
                        <a
                          className="about-icon"
                          href="https://github.com/Abdsmadi4"
                        >
                          <GoMarkGithub />
                        </a>
                        <a
                          className="about-icon"
                          href="https://www.linkedin.com/in/abdallah-smadi-68b093111/"
                        >
                          <FaLinkedinIn />
                        </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
