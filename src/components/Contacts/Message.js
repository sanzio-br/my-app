import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Message() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_udko78p', 'template_3kyh5vp', form.current, "e7NQ0GEhjAuILmM8J")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className="button" />
    </form>
  );
};