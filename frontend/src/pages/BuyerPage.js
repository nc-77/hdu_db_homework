import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../features/Navbar";
import { useHistory } from "react-router";
import GetFormData from "../utils/GetFormData";
import useForm from "../components/useForm";

export default function BuyerPage(props) {
  let RouterHistory = useHistory();

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
          GetFormData(personalCenterInfo),
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
    axios
      .get(`http://localhost:8080/api/good/filter`, {
        params: { name: searchParams.name, label: searchParams.label },
      })
      .then((res) => {
        setMarketInfo(res.data.data);
        console.log(res);
      });
    console.log(searchParams);
  };

  const handleCart = (item) => {
    console.log(item.target.ariaLabel);
    axios
      .get(`http://localhost:8080/api/good/filter`, {
        params: { name: item.target.ariaLabel },
      })
      .then((res) => {
        orderInfo.id = res.data.data[0].id;
        // 更新cart状态后会重新刷一次，所以要把赋值语句放上面
        setCartInfo(res.data.data);
        setShowCart(true);
      });
  };

  const orderSubmitCallback = () => {
    console.log(orderInfo);
  };

  const [isMarketRender, setIsMarketRender] = useState(false);
  const [marketInfo, setMarketInfo] = useState(props);
  const [cartInfo, setCartInfo] = useState();
  const [showCart, setShowCart] = useState(false);
  const orderData = {
    id: "",
    tradeDate: "",
    number: "",
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

  /* 初始化useEffect */

  useEffect(() => {
    const user_buyer_token = localStorage.getItem("user_token_buyer");
    axios
      .get(`http://localhost:8080/api/buyer/myself`, {
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
  }, [setPersonalCenterInfo]);

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
          MarketInfo: marketInfo,
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
        })}
    </>
  );
}
