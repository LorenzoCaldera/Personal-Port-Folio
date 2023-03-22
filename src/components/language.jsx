import React from "react"
import i18next from "i18next"

const languages = [
    {
        "name": "English",
        "code": "en"
    },
    {
        "name": "Español",
        "code": "es"
    },
    {
        "name": "Italiano",
        "code": "it"
    },
    {
        "name": "Français",
        "code": "fr"
    },
    {
        "name": "Português",
        "code": "pt"
    }
]

function ChooseLanguage() {
    return (
        <span id="languages">
            <ul>
                {languages.map(({ name, code }) => (
                    <li
                        key={name}
                        onClick={() => {
                            i18next.changeLanguage(code)
                            document.querySelector("html").lang = code
                        }}
                    >{name}</li>
                ))}
            </ul>
        </span>
    )
}

export default ChooseLanguage