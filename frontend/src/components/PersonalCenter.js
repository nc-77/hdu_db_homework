import React from "react";
import Button from "../features/Button";
import "./PersonalCenter.css";

export default function PersonalCenter({
  personalCenterInfo,
  personalCenterHandleSubmit,
  isEdit,
  isPersonalCenterRender,
  personalCenterHandleChange,
}) {
  return (
    <div>
      {isPersonalCenterRender && !isEdit && (
        <div className="personalCenter-container">
          <form
            onSubmit={personalCenterHandleSubmit}
            className="form"
            noValidate
          >
            <div className="form-inputs">
              <label className="form-label">学号</label>
              {personalCenterInfo.username}
            </div>
            <div className="form-inputs">
              <label className="form-label">姓名</label>
              {personalCenterInfo.name}
            </div>
            <div className="form-inputs">
              <label className="form-label">联系方式</label>
              {personalCenterInfo.phone}
            </div>
            <div className="form-inputs">
              <label className="form-label">昵称</label>
              {personalCenterInfo.nickname}
            </div>
            <Button
              className="btns"
              buttonStyle="btn-blue"
              buttonSize="btn-large"
              type="submit"
            >
              修改
            </Button>
          </form>
        </div>
      )}
      {isPersonalCenterRender && isEdit && (
        <div className="personalCenter-container">
          <form
            onSubmit={personalCenterHandleSubmit}
            className="form"
            noValidate
          >
            <div className="form-inputs">
              <label className="form-label">姓名</label>
              <input
                type="text"
                className="form-input"
                autoComplete="on"
                id="name"
                placeholder="输入中文姓名"
                value={personalCenterInfo.name}
                onChange={personalCenterHandleChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">联系方式</label>
              <input
                type="text"
                className="form-input"
                autoComplete="on"
                id="phone"
                placeholder="手机号"
                value={personalCenterInfo.phone}
                onChange={personalCenterHandleChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">昵称</label>
              <input
                type="text"
                className="form-input"
                autoComplete="on"
                id="nickname"
                placeholder="随便填～"
                value={personalCenterInfo.nickname}
                onChange={personalCenterHandleChange}
              />
            </div>
            <Button
              className="btns"
              buttonStyle="btn-blue"
              buttonSize="btn-large"
              type="submit"
            >
              修改
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
