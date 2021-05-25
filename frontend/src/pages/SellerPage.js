import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useForm from "../components/useForm";
import Navbar from "../features/Navbar";
import getFormData from "../utils/getFormData";

export default function SellerPage(props) {
  /* 上架商品 */

  const marketSubmitCallback = () => {
    console.log(1);
  };

  const [
    putOnInfo,
    PutOnProductHandleChange,
    PutOnProductSubmit,
    setPutOnInfo,
  ] = useForm("", marketSubmitCallback);

  /* 上架商品 */

  /*    个人中心    */

  const [isEdit, setIsEdit] = useState(false);
  const [isPersonalCenterRender, setIsPersonalCenterRender] = useState(false);

  const personalCenterSubmitCallback = () => {
    if (!isEdit) {
      setPersonalCenterInfo({
        username: personalCenterInfo.username,
        name: personalCenterInfo.name,
        nickname: personalCenterInfo.nickname,
        phone: personalCenterInfo.phone,
      });
      setIsEdit(true);
    } else {
      const user_seller_token = localStorage.getItem("user_token_seller");
      axios
        .put(
          `http://localhost:8080/api/seller`,
          getFormData(personalCenterInfo),
          {
            headers: {
              Authorization: `Bear ${user_seller_token}`,
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

  let RouterHistory = useHistory();

  const [NavItem] = useState([
    [
      {
        NavBarName: "二手交易平台",
      },
    ],
    [
      {
        NavBarName: "管理上架商品",
        ToggleLink: () => {
          RouterHistory.push("/seller/putOnProduct");
        },
      },
      {
        NavBarName: "交易订单",
        ToggleLink: () => {
          RouterHistory.push("/seller/order");
        },
      },
      {
        NavBarName: "个人资料",
        ToggleLink: () => {
          RouterHistory.push("/seller/personalCenter");
        },
      },
    ],
  ]);

  useEffect(() => {
    const user_seller_token = localStorage.getItem("user_token_seller");
    axios
      .get(`http://localhost:8080/api/seller/myself`, {
        headers: {
          Authorization: `Bear ${user_seller_token}`,
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
  }, [setPersonalCenterInfo]);

  return (
    <>
      <Navbar defaultState={NavItem} />
      {props.children &&
        React.cloneElement(props.children, {
          personalCenterInfo,
          personalCenterHandleSubmit,
          isEdit,
          isPersonalCenterRender,
          personalCenterHandleChange,
          putOnInfo,
          PutOnProductHandleChange,
          PutOnProductSubmit,
          setPutOnInfo,
        })}
    </>
  );
}
