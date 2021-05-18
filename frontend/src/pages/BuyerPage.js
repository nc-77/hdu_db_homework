import React, { useEffect, useState } from "react";
import useForm from "../components/useFrom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Route, useHistory } from "react-router";
import Button from "../components/Button";

export default function BuyerPage(props) {
  let RouterHistory = useHistory();

  const [NavItem] = useState([
    {
      NavBarName: "Home",
      SwitchLink: () => {
        RouterHistory.push("/buyer");
      },
    },
    {
      NavBarName: "个人中心",
      SwitchLink: () => {
        RouterHistory.push("/buyer/personalCenter");
      },
    },
    {
      NavBarName: "测试",
      SwitchLink: () => {
        RouterHistory.push("/buyer");
      },
    },
  ]);
  const submitCallback = () => {
    axios.get(`http://localhost:8080/api/buyer`);
  };
  const [Info, handleChange, handleSubmit, setInfo] = useForm(
    "",
    submitCallback
  );

  useEffect(() => {
    const user_buyer_token = localStorage.getItem("user_token_buyer");
    axios
      .get(`http://localhost:8080/api/buyer`, {
        headers: {
          Authorization: `Bear ${user_buyer_token}`,
        },
      })
      .then((res) => {
        setInfo(res.data);
      });
  }, []);

  return (
    <>
      <Navbar defaultState={NavItem} />
      {props.children}
    </>
  );
}
