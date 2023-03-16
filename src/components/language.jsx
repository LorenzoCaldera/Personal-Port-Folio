import React from "react"

function ChooseLanguage() {
    const changeLanguage = (e) => {
        console.log("you choose: " + e.target.innerHTML)
    }

    return (
        <span id="languages">
            <ul>
                <li onClick={changeLanguage}>English</li>
                <li onClick={changeLanguage}>Español</li>
                <li onClick={changeLanguage}>Italiano</li>
                <li onClick={changeLanguage}>Português</li>
                <li onClick={changeLanguage}>Frances</li>
            </ul>
        </span>
    )
}

export default ChooseLanguage