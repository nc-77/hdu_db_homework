import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const api =
  process.env.NODE_ENV === "production"
    ? "http://81.68.246.171:9999/api"
    : "https://cors.crazygriferman.com/http://81.68.246.171:9999/api";

ReactDOM.render(<App />, document.getElementById("root"));

export default api;
