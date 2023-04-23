import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '/home/waylonw2077/Development/Code/Phase-2-project/group-5-phase-2-project/src/components/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
