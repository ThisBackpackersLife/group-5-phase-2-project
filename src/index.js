import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
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

  // broke off code below for later use (gets random pick from fetch)
  //     const randomIndex = Math.floor(Math.random() * data.movies.length);
  //     setMovie(data.movies[randomIndex]);
  //     })
  //   .catch(error => console.error(error));
  // 
  