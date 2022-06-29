import './contact.css';
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_cpixhbl",
            "template_oodvk9a",
            formRef.current,
            "BswL1MOuLWwl1GnXV"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
    };

    return (
        <div className="contact">
          <div className="contact-bg" style={{
            backgroundColor: darkMode ? "rgb(234, 229, 218)" : "rgb(14, 14, 14)" }}></div>
          <div className="contact-wrapper">
            <div className="contact-left">
              <h1 className="contact-title">Contact</h1>
              <div className="contact-info">
                <div className="contact-info-item">
                  <img src={Phone} alt="" className="contact-icon" />
                  (315)-416-4143
                </div>
                <div className="contact-info-item">
                  <img className="contact-icon" src={Email} alt="" />
                  nicklona17@gmail.com
                </div>
                <div className="contact-info-item">
                  <img className="contact-icon" src={Address} alt="" />
                    Liverpool, NY
                </div>
              </div>
            </div>
            <div className="contact-right">
              <h3 className="contact-desc">
                Fill out a contact form to get in touch!
              </h3>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333", color: darkMode && "rgb(234, 229, 218)"}} type="text" placeholder="Name" name="user_name" />
                <input style={{backgroundColor: darkMode && "#333", color: darkMode && "rgb(234, 229, 218)"}} type="text" placeholder="Subject" name="user_subject" />
                <input style={{backgroundColor: darkMode && "#333", color: darkMode && "rgb(234, 229, 218)"}} type="text" placeholder="Email" name="user_email" />
                <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "rgb(234, 229, 218)"}} rows="10" placeholder="Message" name="message" />
                <button>Submit</button>
                {done && " Thank you..."}
              </form>
            </div>
          </div>
          <div className="socials">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/nicholas-lona/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: darkMode ? "rgb(234, 229, 218)" : "rgb(14, 14, 14)" }}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/nicklona17">
                    <FontAwesomeIcon 
                      icon={faGithub} 
                      style={{ color: darkMode ? "rgb(234, 229, 218)" : "rgb(14, 14, 14)" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
        </div>
      );
}

export default Contact;