import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    fallbackLng: "en",
    detection: {
        order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']
    }
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
