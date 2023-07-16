import React from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactForm.module.scss";
import Button from "../Button/Button.jsx";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.SERVICE_ID}`,
        `${process.env.TEMPLATE_ID}`,
        e.target,
        `${process.env.PUBLIC_KEY}`
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form className={styles["contactSection"]} onSubmit={handleSubmit}>
      <div className={styles["contactSection-top"]}>
        <div className={styles["form-element"]}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
          />
        </div>
        <div className={styles["form-element"]}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email ID"
          />
        </div>
      </div>
      <div className={styles["form-element"]}>
        <label htmlFor="message">
          What do you want to discuss over a coffee?
        </label>
        <textarea
          placeholder="Your Message..."
          id="message"
          name="message"
          rows="3"
        />
      </div>
      <Button text="Send Message !!" type="submit" />
    </form>
  );
};

export default ContactForm;
