import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../features/Navbar";
import { useHistory } from "react-router";
import getFormData from "../utils/getFormData";
import useForm from "../components/useForm";
import api from "../index.js";

export default function BuyerPage(props) {
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
      const user_buyer_token = localStorage.getItem("user_token_buyer");
      axios
        .put(`${api}/buyer`, getFormData(personalCenterInfo), {
          headers: {
            Authorization: `Bear ${user_buyer_token}`,
          },
        })
        .then((res) => {
          setIsEdit(false);
          alert(res.data.msg);
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
    axios
      .get(`${api}/good/filter`, {
        params: { name: searchParams.name, label: searchParams.label },
      })
      .then((res) => {
        alert(res.data.msg);
        setMarketInfo(res.data.data);
      });
  };

  const handleCart = (item) => {
    axios
      .get(`${api}/good/filter`, {
        params: { name: item.target.ariaLabel },
      })
      .then((res) => {
        orderInfo.good_id = res.data.data[0].id;
        setCartInfo(res.data.data);
        setShowCart(true);
      });
  };

  const [isMarketRender, setIsMarketRender] = useState(false);
  const [marketInfo, setMarketInfo] = useState(props);
  const [cartInfo, setCartInfo] = useState();
  const [showCart, setShowCart] = useState(false);
  const orderSubmitCallback = () => {
    const user_buyer_token = localStorage.getItem("user_token_buyer");
    axios
      .post(`${api}/order`, getFormData(orderInfo), {
        headers: {
          Authorization: `Bear ${user_buyer_token}`,
        },
      })
      .then((res) => {
        alert(res.data.msg);
      });
  };
  const orderData = {
    good_id: "",
    trade_date: "",
    number: 1,
  };
  const [orderInfo, OrderHandleChange, OrderHandleSubmit, setOrderInfo] =
    useForm(orderData, orderSubmitCallback);
  const [
    searchParams,
    MarketHandleChange,
    MarketHandleSubmit,
    setSearchParams,
  ] = useForm("", marketSubmitCallback);

  /*    市场    */

  /*    导航栏    */

  let RouterHistory = useHistory();

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

  /* 订单 */

  const [orderDisplayData, setOrderDisplayData] = useState(props);
  const [showBuyerOrderCenter, setShowBuyerOrderCenter] = useState(false);
  /* 订单 */

  /* 初始化useEffect */

  useEffect(() => {
    const user_buyer_token = localStorage.getItem("user_token_buyer");
    axios
      .get(`${api}/buyer/myself`, {
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
    axios
      .get(`${api}/order/buyer`, {
        headers: {
          Authorization: `Bear ${user_buyer_token}`,
        },
      })
      .then((res) => {
        setOrderDisplayData(res.data.data);
        if (orderDisplayData) {
          setShowBuyerOrderCenter(true);
        }
      });
    axios.get(`${api}/good/all`).then((res) => {
      setMarketInfo(res.data.data);

      setIsMarketRender(true);
    });
  }, [setPersonalCenterInfo, setOrderDisplayData]);

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
          marketInfo: marketInfo,
          isMarketRender: isMarketRender,
          MarketHandleChange: MarketHandleChange,
          MarketHandleSubmit: MarketHandleSubmit,
          searchParams: searchParams,
          setSearchParams: setSearchParams,
          handleCart: handleCart,
          cartInfo: cartInfo,
          showCart: showCart,
          orderInfo: orderInfo,
          OrderHandleChange: OrderHandleChange,
          OrderHandleSubmit: OrderHandleSubmit,
          orderDisplayData,
          setOrderDisplayData,
          showBuyerOrderCenter,
        })}
    </>
  );
}
