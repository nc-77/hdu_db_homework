import useForm from "../components/useForm";
import React from "react";
import axios from "axios";
import getFormData from "../utils/getFormData";
import { useHistory } from "react-router";
import DragonImg from "../assets/images/dragon.jpg";
import "./LoginPage.css";
import api from "../index.js";

const data = {
  username: "",
  password: "",
  identity: "buyer",
};

export default function Login() {
  let RouterHistory = useHistory();

  const submitCallback = () => {
    axios
      .post(`${api}/${Info.identity}/login`, getFormData(Info))
      .then((res) => {
        const responseData = JSON.parse(res.request.response);
        const token = responseData.data.token;
        const status = responseData.code;
        localStorage.setItem(`user_token_${Info.identity}`, token);
        if (status) {
          RouterHistory.push(`/${Info.identity}`);
        }
        alert(res.data.msg);
      });
  };

  const [Info, handleChange, handleSubmit] = useForm(data, submitCallback);

  return (
    <div className="form-container">
      <div className="form-content-left">
        <img className="form-img" src={DragonImg} alt="dragon" />
      </div>
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-inputs">
            <label className="form-label">学号</label>
            <input
              className="form-input-loginPage"
              type="text"
              name="username"
              placeholder="8位学号"
              value={Info.username || "" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">密码</label>
            <input
              className="form-input-loginPage"
              type="password"
              name="password"
              placeholder="输入密码"
              value={Info.password || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">选择身份</label>
            <select
              className="form-input-loginPage"
              name="identity"
              onChange={handleChange}
              value={Info.identity || ""}
            >
              <option value="buyer">买家</option>
              <option value="seller">卖家</option>
            </select>
          </div>
          <button className="form-input-btn" type="submit">
            登录
          </button>
          <span className="form-input-login">
            没有账号就
            <a
              onClick={() => {
                RouterHistory.push("/register");
              }}
            >
              注册
            </a>
            吧～
          </span>
        </form>
      </div>
    </div>
  );
}
