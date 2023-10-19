import React from "react";
import "./About.css";
import AboutImg from "../../assets/about.png";
import Info from "./Info";

const About = () => {
  const handleOpenGmailDraft = () => {
    const subject = "Your subject here";
    const body = "Your email body here";
    const recipient = "namanp612@gmail.com";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(mailtoLink);
  };
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">A Brief Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="about" className="about__img" />
        <div className="about__data">
          <Info />
          <div className="about__description">
            <p>
              {" "}
              I am a <strong>Website Developer</strong> who enjoys connecting
              the pages. I have knowledge in developing projects using various
              programming languages such as{" "}
              <strong>
                {" "}
                JavaScript, HTML, CSS, C++, etc. As well as my skills in Cloud
                Computing (AWS), Full Stack Development, MERN Stack, and UI
              </strong>{" "}
              have helped me to create some amazing projects. Moreover, I have
              developed web applications based on Single Page Applications
              (SPAs) with frameworks like <strong>
                {" "}
                React, Bootstrap,
              </strong>{" "}
              etc. I like to cook new recipes, listen to music, keep up my
              health.
            </p>
          <div>
            <button
              onClick={handleOpenGmailDraft}
              className="button button--flex"
            >
              Gmail Me!
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
