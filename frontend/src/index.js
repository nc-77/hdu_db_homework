import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const api =
  process.env.NODE_ENV === "production"
<<<<<<< HEAD
    ? "http://81.68.246.171:9999/api"
    : "https://cors.crazygriferman.com/http://81.68.246.171:9999/api";
=======
    ? "http://81.68.246.171:8080/api"
    : "http://localhost:8080/api";
>>>>>>> c994b8794df4f0a755948196a78729ae007187e0

ReactDOM.render(<App />, document.getElementById("root"));

export default api;
