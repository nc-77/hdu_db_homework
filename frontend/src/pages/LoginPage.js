import useForm from "../components/useFrom";
import React from "react";
import axios from "axios";
import getFormData from "../utils/GetFormData";

const data = {
  username: "",
  password: "",
};

export default function Login() {
  const submitCallback = () => {
    axios
      .post("http://localhost:8080/api/buyer/login", getFormData(Info))
      .then((res) => {
        const responseData = JSON.parse(res.request.response);
        const token = responseData.data.token;
        localStorage.setItem("user_token", token);
      });
  };

  const [Info, handleChange, handleSubmit] = useForm(data, submitCallback);

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group text-left">
          <label>学号</label>
          <input
            type="text"
            className="form-control"
            autoComplete="on"
            id="username"
            placeholder="Enter username"
            value={Info.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label>密码</label>
          <input
            type="password"
            className="form-control"
            autoComplete="on"
            id="password"
            placeholder="Password"
            value={Info.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <input
            type="checkbox"
            className="form-control"
            autoComplete="on"
            id="password"
            placeholder="Password"
            value={Info.password}
            onChange={handleChange}
          />
          <label>我是买家</label>
          <br />
          <input
            type="checkbox"
            className="form-control"
            autoComplete="on"
            id="password"
            placeholder="Password"
            value={Info.password}
            onChange={handleChange}
          />
          <label>我是卖家</label>
          <br />
        </div>
        <input type="submit" className="btn btn-primary" value="登录" />
      </form>
    </div>
  );
}
