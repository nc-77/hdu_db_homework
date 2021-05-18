import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../features/Button";
import getFormData from "../utils/GetFormData";
import "./PersonalCenter.css";
import useForm from "./useFrom";

export default function PersonalCenter({ props, event }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isRender, setIsRender] = useState(false);

  const submitCallback = () => {
    if (!isEdit) {
      setInfo({
        name: props.data.name,
        nickname: props.data.nickname,
        phone: props.data.phone,
      });
      setIsEdit(true);
    } else {
      const user_buyer_token = localStorage.getItem("user_token_buyer");
      axios
        .put(`http://localhost:8080/api/buyer`, getFormData(Info), {
          headers: {
            Authorization: `Bear ${user_buyer_token}`,
          },
        })
        .finally(() => {
          setIsEdit(false);
        });
    }
  };

  const [Info, handleChange, handleSubmit, setInfo] = useForm(
    "",
    submitCallback
  );

  useEffect(() => {
    if (props) {
      setInfo(props);
      setIsRender(true);
    }
  }, [props]);

  return (
    <div>
      {isRender && !isEdit && (
        <div className="personalCenter-container">
          <form onSubmit={handleSubmit} className="form" noValidate>
            <div className="form-inputs">
              <label className="form-label">学号</label>
              {Info.data.username}
            </div>
            <div className="form-inputs">
              <label className="form-label">姓名</label>
              {Info.data.name}
            </div>
            <div className="form-inputs">
              <label className="form-label">联系方式</label>
              {Info.data.phone}
            </div>
            <div className="form-inputs">
              <label className="form-label">昵称</label>
              {Info.data.nickname}
            </div>
            <Button
              className="btns"
              buttonStyle="btn-blue"
              buttonSize="btn-large"
              type="submit"
              onClick={event.test}
            >
              修改
            </Button>
          </form>
        </div>
      )}
      {isRender && isEdit && (
        <div className="personalCenter-container">
          <form onSubmit={handleSubmit} className="form" noValidate>
            <div className="form-inputs">
              <label className="form-label">姓名</label>
              <input
                type="text"
                className="form-input"
                autoComplete="on"
                id="name"
                placeholder="输入中文姓名"
                value={Info.name}
                onChange={handleChange}
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
                value={Info.phone}
                onChange={handleChange}
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
                value={Info.nickname}
                onChange={handleChange}
              />
            </div>
            <Button
              className="btns"
              buttonStyle="btn-blue"
              buttonSize="btn-large"
              type="submit"
              onClick={event.test}
            >
              修改
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
