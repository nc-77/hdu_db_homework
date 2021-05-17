import useForm from "../components/useFrom";
import React from "react";
import axios from "axios";
import getFormData from "../utils/GetFormData";

const data = {
  username: "",
  password: "",
  identity: "",
};

export default function Login() {
  const submitCallback = () => {
    axios
      .post(
        `http://localhost:8080/api/${Info.identity}/login`,
        getFormData(Info)
      )
      .then((res) => {
        const responseData = JSON.parse(res.request.response);
        const token = responseData.data.token;
        localStorage.setItem(`user_token_${Info.identity}`, token);
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
          <label>选择身份</label>
          <select id="identity" onChange={handleChange} value={Info.identity}>
            <option value="buyer">买家</option>
            <option value="seller">卖家</option>
          </select>
        </div>
        <input type="submit" className="btn btn-primary" value="登录" />
      </form>
    </div>
  );
}
