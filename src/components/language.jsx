import React from "react"

const languages = [
    {   
        "name": "English",
        "country_code": "us",
        "code": "en"
    },
    {
        "name": "Español",
        "country_code": "es",
        "code": "es"
    },
    {
        "name": "Italiano",
        "country_code": "it",
        "code": "it"
    },
    {
        "name": "Français",
        "country_code": "fr",
        "code": "fr"
    },
    {
        "name": "Português",
        "country_code": "br",
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
                        <span className={`flag-icon flag-icon-${country_code}`}></span>
                        {name}
                    </li>
                ))}
            </ul>
        </span>
    )
}

export default ChooseLanguage