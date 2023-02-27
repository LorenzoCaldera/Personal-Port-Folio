import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactMe () {
    return (
        <section id="contact" className="d-flex">
            <div className="social__media">
                <a href="">
                    <FontAwesomeIcon icon={faGithub} />Github
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} />Instagram
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faEnvelope} />Email
                </a>
            </div>
            <form className="contact__form d-flex">
                <div className="form__item form__message">
                    <label>Message:</label>
                    <input placeholder="Write here your message..."/>
                </div>
                <div>
                    <div className="form__item">
                        <label>Your Email:</label>
                        <input placeholder="someone@example.com"/>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactMe