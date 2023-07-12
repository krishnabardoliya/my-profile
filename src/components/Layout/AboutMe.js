import { useEffect } from "react";
import Button from "../UI/Button";
import { Link } from "react-scroll";

import classes from "../../styles/AboutMe.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Krishna from "../../images/krishna.png";

import ReactIcon from "../../images/react.png";
import ReduxIcon from "../../images/redux.svg";
import JavascriptIcon from "../../images/javascript.png";
import SassIcon from "../../images/sass.svg";
import GitIcon from "../../images/Git.svg.png";
import GitHubIcon from "../../images/github.svg";
import FirebaseIcon from "../../images/firebase.png";
import PhotoshopIcon from "../../images/photoshop.png";

import Hello from "../../images/hello.gif";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease",
      once: true,
    });
  });

  return (
    <section id="about" className={classes["section-about"]}>
      <div className={classes["section-container"]}>
        <img className={classes["section-pic"]} src={Krishna} alt="krishna"></img>
        {/* <img src={Hello} alt="hello" /> */}
        <h3 className={classes["section-heading-primary"]}>Hello!</h3>
        <div>
          <p className={classes["section-description"]}>
         I have five years of frontend development expertise, I possess a comprehensive understanding of HTML, CSS, and JavaScript. My proficiency in modern frameworks and libraries such as React, Angular, and Vue.js enables me to build dynamic and interactive user interfaces. I am adept at collaborating with designers and backend developers to create visually appealing and high-performance web applications.
          </p>
          <div className={classes["section-btn"]}>
            <Link to="projects" spy={true} smooth={true}>
              <Button>See my projects</Button>
            </Link>
          </div>
        </div>
        <h3 className={classes["section-heading-secondary"]}>My Tech Skills</h3>

        <div className={classes["section-skills"]}>
          <div className={classes["section-skills-item"]}>
            <h5 className={classes["section-skills-caption"]}>ReactJs</h5>
            <img
              className={classes["section-skills-image"]}
              src={ReactIcon}
              alt="reactIcon"
            ></img>
          </div>
          <div className={classes["section-skills-item"]}>
            <h5 className={classes["section-skills-caption"]}>Redux</h5>
            <img
              className={classes["section-skills-image"]}
              src={ReduxIcon}
              alt="reduxIcon"
            ></img>
          </div>

          <div className={classes["section-skills-item"]}>
            <h5 className={classes["section-skills-caption"]}>JavaScript</h5>
            <img
              className={classes["section-skills-image"]}
              src={JavascriptIcon}
              alt="javascriptIcon"
            ></img>
          </div>

          <div className={classes["section-skills-item"]}>
            <h5 className={classes["section-skills-caption"]}>Sass</h5>
            <img
              className={classes["section-skills-image"]}
              src={SassIcon}
              alt="sassIcon"
            ></img>
          </div>

          <div className={classes["section-skills-item"]}>
            <h5 className={classes["section-skills-caption"]}>Git</h5>
            <img
              className={classes["section-skills-image"]}
              src={GitIcon}
              alt="gitIcon"
            ></img>
          </div>

          <div className={classes["section-skills-item"]}>
            <h5 className={classes["section-skills-caption"]}>GitHub</h5>
            <img
              className={classes["section-skills-image"]}
              src={GitHubIcon}
              alt="githubIcon"
            ></img>
          </div>

          <div className={classes["section-skills-item"]}>
            <h5 className={classes["section-skills-caption"]}>Firebase</h5>
            <img
              className={classes["section-skills-image-7"]}
              src={FirebaseIcon}
              alt="firebaseIcon"
            ></img>
          </div>

          <div className={classes["section-skills-item"]}>
            <h5 className={classes["section-skills-caption"]}>Photoshop</h5>
            <img
              className={classes["section-skills-image"]}
              src={PhotoshopIcon}
              alt="photoshopIcon"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
