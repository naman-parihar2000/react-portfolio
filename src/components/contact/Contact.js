import React, { useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Let's Connect</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">namanp612@gmail.com</span>

              <a
                href="mailto:cyphersylph@gmail.com"
                className="contact__button"
              >
                Write Me...{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">What's the Doubt?</h3>

          <form ref={form} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Type your name..."
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Type your email..."
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Provide some queries..."
              ></textarea>
            </div>

            <button href="#about" className="button button--flex">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
