// Internet Explorer 11 requires polyfills and partially supported by this project.
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import './i18n';
import './styles/app-base.css';
import './styles/app-components.css';
import './styles/app-utilities.css';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from './locales/en';
import { ru } from './locales/ru';
import { am } from './locales/am';


const defaultLanguage = localStorage.getItem('lng') || 'ru'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      ru: ru,
      am: am
   },
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false
    }
  });


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
