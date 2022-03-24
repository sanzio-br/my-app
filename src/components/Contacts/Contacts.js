import React from 'react'
import "./Contacts.css";
import Email from './Message';
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import Footer from '../Footer/Footer';
export default function Contacts() {
  return (
    <section className="contact" id="contacts">
      <div className="heading">
        <h1 className="pageheading">Contacts</h1>
      </div>
      <div className="contacts">
        <div className="location">
          <p>
            <HiLocationMarker />
            <span>Nairobi/ Kenya</span>
          </p>
          <div className="C-card">
            <MdEmail />
            <h5>Email</h5>
            <a href="wa.me">Send Email</a>
          </div>
          <div className="C-card">
            <ImWhatsapp />
            <h5>Whatsapp</h5>
            <a href="https://wa.me/+1 (617) 263-5260">Send Message</a>
          </div>
        </div>
        <div className="message">
          <Email />
        </div>
      </div>
      <Footer />
    </section>
  )
}