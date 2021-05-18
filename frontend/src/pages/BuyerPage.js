import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router";

export default function BuyerPage(props) {
  let RouterHistory = useHistory();

  const [Info, setInfo] = useState("");

  const [NavItem] = useState([
    {
      NavBarName: "市场",
      ToggleLink: () => {
        RouterHistory.push("/buyer");
      },
    },
    {
      NavBarName: "个人中心",
      ToggleLink: () => {
        RouterHistory.push("/buyer/personalCenter");
      },
    },
    {
      NavBarName: "联系",
      ToggleLink: () => {
        RouterHistory.push("/buyer/contact");
      },
    },
  ]);

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
      {props.children &&
        React.cloneElement(props.children, {
          props: Info,
        })}
    </>
  );
}
