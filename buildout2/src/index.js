import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import States from './States';
import Weather from './Weather';
import Spellcheck from './Spellcheck';
import Dictionary from './Dictionary';
import Table from './Table';
import Modal from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <States /> */}
    {/* <Weather /> */}
    {/* <Spellcheck /> */}
    {/* <Dictionary /> */}
    {/* <Table /> */}
    <Modal />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
