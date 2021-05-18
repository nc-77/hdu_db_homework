import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../features/Navbar";
import { useHistory } from "react-router";
import getFormData from "../utils/GetFormData";
import useForm from "../components/useForm";

export default function BuyerPage(props) {
  let RouterHistory = useHistory();

  useEffect(() => {
    const user_buyer_token = localStorage.getItem("user_token_buyer");
    axios
      .get(`http://localhost:8080/api/buyer`, {
        headers: {
          Authorization: `Bear ${user_buyer_token}`,
        },
      })
      .then((res) => {
        const data = {
          username: res.data.data.username,
          name: res.data.data.name,
          phone: res.data.data.phone,
          nickname: res.data.data.nickname,
        };
        setPersonalCenterInfo(data);
        setIsPersonalCenterRender(true);
      });
    axios.get("http://localhost:8080/api/good/all").then((res) => {
      setMarketInfo(res.data.data);
      setIsMarketRender(true);
    });
  }, []);

  /*    个人中心    */

  const [isEdit, setIsEdit] = useState(false);
  const [isPersonalCenterRender, setIsPersonalCenterRender] = useState(false);

  const personalCenterSubmitCallback = () => {
    if (!isEdit) {
      setPersonalCenterInfo({
        name: personalCenterInfo.name,
        nickname: personalCenterInfo.nickname,
        phone: personalCenterInfo.phone,
      });
      setIsEdit(true);
    } else {
      const user_buyer_token = localStorage.getItem("user_token_buyer");
      axios
        .put(
          `http://localhost:8080/api/buyer`,
          getFormData(personalCenterInfo),
          {
            headers: {
              Authorization: `Bear ${user_buyer_token}`,
            },
          }
        )
        .finally(() => {
          setIsEdit(false);
        });
    }
  };

  const [
    personalCenterInfo,
    personalCenterHandleChange,
    personalCenterHandleSubmit,
    setPersonalCenterInfo,
  ] = useForm("", personalCenterSubmitCallback);

  /*    个人中心    */

  /*    市场    */
  const marketSubmitCallback = () => {
    //axios.get().then((res) => {setMarketInfo(res)});
    console.log(searchParams);
  };
  const [isMarketRender, setIsMarketRender] = useState(false);
  const [MarketInfo, setMarketInfo] = useState(props);
  const [
    searchParams,
    MarketHandleChange,
    MarketHandleSubmit,
    setSearchParams,
  ] = useForm("", marketSubmitCallback);

  /*    市场    */

  /*    导航栏    */

  const [NavItem] = useState([
    [
      {
        NavBarName: "二手交易平台",
      },
    ],
    [
      {
        NavBarName: "市场",
        ToggleLink: () => {
          RouterHistory.push("/buyer/market");
        },
      },
      {
        NavBarName: "订单",
        ToggleLink: () => {
          RouterHistory.push("/buyer/contact");
        },
      },
      {
        NavBarName: "个人资料",
        ToggleLink: () => {
          RouterHistory.push("/buyer/personalCenter");
        },
      },
    ],
  ]);

  /*    导航栏    */

  return (
    <>
      <Navbar defaultState={NavItem} />
      {props.children &&
        React.cloneElement(props.children, {
          personalCenterInfo: personalCenterInfo,
          personalCenterHandleSubmit: personalCenterHandleSubmit,
          isEdit: isEdit,
          isPersonalCenterRender: isPersonalCenterRender,
          personalCenterHandleChange: personalCenterHandleChange,
          MarketInfo: MarketInfo,
          isMarketRender: isMarketRender,
          MarketHandleChange: MarketHandleChange,
          MarketHandleSubmit: MarketHandleSubmit,
          searchParams: searchParams,
          setSearchParams: setSearchParams,
        })}
    </>
  );
}
