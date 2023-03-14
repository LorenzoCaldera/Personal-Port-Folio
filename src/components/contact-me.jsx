import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactMe () {
    const [emailState, setEmail] = React.useState("disabled")
    const [messageState, setMessage] = React.useState("disabled")

    const handlerEmail = e => {
        const emailRegex = new RegExp('\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b', "gi");
        if (emailRegex.test(e.target.value)) {
            setEmail("")
        } else {
            setEmail("disabled")
        }
    }

    const handlerMessage = e => {
        if (e.target.value !== "") {
            setMessage("")
        } else {
            setMessage("disabled")
        }
    }

    return (
        <section id="contact" className="d-flex">
            <h1>CONTACT ME</h1>
            <address className="social__media">
                <a target="_blank" href="https://github.com/LorenzoCaldera">
                    <FontAwesomeIcon icon={faGithub} /><p>Github</p>
                </a>
                <a target="_blank" href="https://www.instagram.com/lolocalde/">
                    <FontAwesomeIcon icon={faInstagram} /><p>Instagram</p>
                </a>
                <a target="_blank" href="https://www.freecodecamp.org/loloix_">
                    <FontAwesomeIcon icon={faFreeCodeCamp} /><p>freeCodeCamp</p>
                </a>
                <a target="_blank" href="">
                    <FontAwesomeIcon icon={faEnvelope} /><p>Email</p>
                </a>
            </address>
            <form id="contact__form" method="get" onSubmit={(event) => {event.preventDefault()}}>
                <div className={`form__item form__message ${messageState}`}>
                    <label for="message">Message:</label>
                    <textarea
                        required
                        id="message"
                        onChange={handlerMessage}
                        name="message"
                        type="text"
                        form="contact__form"
                        placeholder="Write here your message..."
                    />
                </div>
                <div>
                    <div className={`form__item ${emailState}`}>
                        <label for="email">Your Email:</label>
                        <input
                            required
                            onChange={handlerEmail}
                            laceholder="someone@example.com"
                            id="email"
                            type="email"
                            name="email"
                            form="contact__form"
                            autoComplete="off"
                        />
                    </div>
                    <button
                        className={`btn__hover-eff ${emailState} ${messageState}`}
                        type="submit"    
                        name="submit"
                        value=""
                        form="contact__form"
                        disabled={emailState || messageState}
                    >Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactMe