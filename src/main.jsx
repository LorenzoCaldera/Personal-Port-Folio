import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'

import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    lng: document.querySelector('html').lang,
    fallbackLng: "en",
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

let mouseTracker = document.getElementsByClassName("mouse-tracker"),
    scroll = 0

window.onscroll = () => {
    scroll = window.scrollY
}

document.body.onpointermove = e => {
    const { clientX, clientY } = e

    mouseTracker[0].animate({
        top: `${clientY + scroll}px`,
        left: `${clientX}px`
    }, {duration: 3000, fill: "forwards"})

    mouseTracker[1].animate({
        top: `${clientY + scroll}px`,
        left: `${clientX}px`
    }, {duration: 100, fill: "forwards"})
}
