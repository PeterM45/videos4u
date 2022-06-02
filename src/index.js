// Import React, ReactDOM, and App Component
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// React accesses the Dom and renders the main App component
// to a div in 'public/index.html' with an id of 'root'
ReactDOM.render(<App />, document.querySelector("#root"));
