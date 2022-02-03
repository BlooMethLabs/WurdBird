import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WurdBird from "./WurdBird";
import reportWebVitals from "./reportWebVitals";
import axios from 'axios';

// Use NIC's IP address when testing over network
// axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.baseURL = 'https://wurd-bird.herokuapp.com';

ReactDOM.render(
  <React.StrictMode>
    <WurdBird />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
