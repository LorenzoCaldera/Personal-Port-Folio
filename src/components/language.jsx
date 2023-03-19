import React from "react"

function ChooseLanguage() {
    const changeLanguage = (e) => {
        console.log("you choose: " + document.querySelector("html").lang)
        document.querySelector("html").lang = e.target.dataset.lang
    }

    return (
        <span id="languages">
            <ul>
                <li data-lang="en" onClick={changeLanguage}>English</li>
                <li data-lang="es" onClick={changeLanguage}>Español</li>
                <li data-lang="it" onClick={changeLanguage}>Italiano</li>
                <li data-lang="pt" onClick={changeLanguage}>Português</li>
                <li data-lang="fr" onClick={changeLanguage}>Frances</li>
            </ul>
        </span>
    )
}

export default ChooseLanguage