import React from "react"

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
    const changeLanguage = (language) => {
        document.querySelector("html").lang = language
        console.log("you choose: " + document.querySelector("html").lang)
    }

    return (
        <span id="languages">
            <ul>
                {languages.map(({ name, code, country_code }) => (
                    <li key={name} onClick={() => changeLanguage(code)}>
                        <span className={`flag-icon flag-icon-${country_code}`} />
                        {name}
                    </li>
                ))}
            </ul>
        </span>
    )
}

export default ChooseLanguage