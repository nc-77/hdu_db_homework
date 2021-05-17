import GetFormData from "../utils/GetFormData";
import useForm from "../components/useFrom";
import React from "react";
import axios from "axios";

const data = {
  username: "",
  password: "",
  name: "",
  phone: "",
  nickname: "",
  identity: "",
};

export default function Register() {
  const submitCallback = () => {
    console.log(Info);
    axios.post(
      `http://localhost:8080/api/${Info.identity}/register`,
      GetFormData(Info)
    );
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
}
