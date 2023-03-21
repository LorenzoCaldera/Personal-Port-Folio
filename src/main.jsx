import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'es', 'fr', 'it', 'pt'],
    fallbackLng: "en",
    detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']
    },
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json'
    },
    react: { useSuspense: false }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('welcome_to_react')}</h2>;
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
