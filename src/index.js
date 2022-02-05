import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ReactDOM } from "react";
import reactDom from "react-dom";
import App from "./GNparticals/App"; 

const indexId = document.querySelector('#root')
reactDom.render(
    <App/>,indexId
)