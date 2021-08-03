import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const api =
  process.env.NODE_ENV === "production"
    ? "http://81.68.246.171:8080/api"
    : "http://localhost:8080/api";

ReactDOM.render(<App />, document.getElementById("root"));

export default api;
