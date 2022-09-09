import React from 'react';

import './contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="main-container">
        <h2 className="heading">
          <span className="heading__sec-main">Contact Me</span>
          <span className="heading__sec-sub">
            Please contact me by filling the form below and I will be in touch
            with you as soon as possible.
          </span>
        </h2>

        {/* Contact form */}

        <div className="contact__form__container">
          <form action="#" className="contact__form">
            <div className="contact__form__field">
              <label htmlFor="name" className="contact__form__label">
                Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter your name"
                name="user_name"
                className="contact__form__input"
                id="name"
              />
            </div>
            <div className="contact__form__field">
              <label htmlFor="subject" className="contact__form__label">
                Subject
              </label>
              <input
                type="text"
                placeholder="Please enter the subject matter "
                name="user_subject"
                className="contact__form__input"
                id="subject"
              />
            </div>
            <div className="contact__form__field">
              <label htmlFor="email" className="contact__form__label">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="Enter your Email"
                name="user_email"
                id="email"
                className="contact__form__input"
              />
            </div>
            <div className="contact__form__field">
              <label htmlFor="message" className="contact__form__label">
                Message
              </label>
              <textarea
                name="user_message"
                id="message"
                cols="30"
                rows="10"
                className="contact__form__input"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
