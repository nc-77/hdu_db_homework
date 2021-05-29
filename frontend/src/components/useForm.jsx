import { useState } from "react";

const useForm = (defaultState, submitCallback) => {
  const [Info, setInfo] = useState(defaultState);

  const handleChange = (e) => {
    setInfo({
      ...Info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  /* const RegisterForm = () => {
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
              value={RegisterInfo.username}
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
              value={RegisterInfo.password}
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
              value={RegisterInfo.name}
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
              value={RegisterInfo.phone}
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
              value={RegisterInfo.nickname}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="提交" />
        </form>
      </div>
    );
  }; */

  return [Info, handleChange, handleSubmit, setInfo];
};

export default useForm;
