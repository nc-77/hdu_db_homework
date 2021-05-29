import getFormData from "../utils/getFormData";
import useForm from "../components/useForm";
import "./RegisterPage.css";
import React from "react";
import axios from "axios";
import DragonImg from "../assets/images/dragon.jpg";
import { useHistory } from "react-router";

const data = {
  username: "",
  password: "",
  name: "",
  phone: "",
  nickname: "",
  identity: "buyer",
};

export default function Register() {
  let RouterHistory = useHistory();
  const submitCallback = () => {
    axios.post(
      `http://localhost:8080/api/${Info.identity}/register`,
      getFormData(Info)
    );
  };

  const [Info, handleChange, handleSubmit] = useForm(data, submitCallback);
  /*
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
          <label>密码确认</label>
          <input
            type="password"
            className="form-control"
            autoComplete="on"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-group text-left">
          <label>姓名</label>
          <input
            type="text"
            className="form-control"
            autoComplete="on"
            id="name"
            placeholder="name"
            value={Info.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label>联系方式</label>
          <input
            type="text"
            className="form-control"
            autoComplete="on"
            id="phone"
            placeholder="contact"
            value={Info.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label>昵称</label>
          <input
            type="text"
            className="form-control"
            autoComplete="on"
            id="nickname"
            placeholder="nickname"
            value={Info.nickname}
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
        <input type="submit" className="btn btn-primary" value="提交" />
      </form>
    </div>
    
  );
  */

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
              className="form-input"
              type="text"
              name="username"
              placeholder="8位学号"
              value={Info.username || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">姓名</label>
            <input
              type="text"
              className="form-input"
              autoComplete="on"
              name="name"
              placeholder="输入中文姓名"
              value={Info.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">密码</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="输入密码"
              value={Info.password || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">再次输入密码</label>
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="确认密码"
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">联系方式</label>
            <input
              type="text"
              className="form-input"
              autoComplete="on"
              name="phone"
              placeholder="手机号"
              value={Info.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">昵称</label>
            <input
              type="text"
              className="form-input"
              autoComplete="on"
              name="nickname"
              placeholder="随便填～"
              value={Info.nickname || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">选择身份</label>
            <select
              className="form-input"
              name="identity"
              onChange={handleChange}
              value={Info.identity || ""}
            >
              <option value="buyer">买家</option>
              <option value="seller">卖家</option>
            </select>
          </div>
          <button className="form-input-btn" type="submit">
            注册
          </button>
          <span className="form-input-login">
            有账号就
            <a
              onClick={() => {
                RouterHistory.push("/login");
              }}
            >
              登录
            </a>
            吧～
          </span>
        </form>
      </div>
    </div>
  );
}
