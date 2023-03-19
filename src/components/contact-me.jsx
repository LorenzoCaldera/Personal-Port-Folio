import React from "react";
import scrollEff from "../assets/scroll-eff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactMe () {
    const [emailState, setEmail] = React.useState("disabled")
    const [messageState, setMessage] = React.useState("disabled")
    const [contactClass, setContactClass] = React.useState("show")

    const contactRef = React.useRef()

    scrollEff([contactRef], [setContactClass])

    const handlerEmail = e => {
        const emailRegex = new RegExp('\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b', "gi");
        emailRegex.test(e.target.value) ? setEmail("") : setEmail("disabled")
    }

    const handlerMessage = e => {
        e.target.value !== "" ? setMessage("") : setMessage("disabled")
    }

    return (
        <section ref={contactRef} id="contact" className={`d-flex ${contactClass}`}>
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
            </address>
            <form id="contact__form" method="get" onSubmit={(event) => {event.preventDefault()}}>
                <div className={`form__item form__message ${messageState}`}>
                    <label htmlFor="message">Message:</label>
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
                        <label htmlFor="email">Your Email:</label>
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
                        className="btn__hover-eff"
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