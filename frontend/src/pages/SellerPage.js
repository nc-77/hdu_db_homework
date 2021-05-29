import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useForm from "../components/useForm";
import Navbar from "../features/Navbar";
import getFormData from "../utils/getFormData";

export default function SellerPage(props) {
  /* 上架商品 */

  /* const orderSubmitCallback = () => {
    const user_buyer_token = localStorage.getItem("user_token_buyer");
    axios
      .post(`http://localhost:8080/api/order`, getFormData(orderInfo), {
        headers: {
          Authorization: `Bear ${user_buyer_token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  const goodsData = {
    good_id: "",
    trade_date: "",
    number: 1,
  };
  const [goodsInfo, OrderHandleChange, OrderHandleSubmit, setOrderInfo] =
    useForm(goodsData, orderSubmitCallback); */

  const [goodsInfo, setGoodsInfo] = useState(props);
  console.log(goodsInfo);
  const handleGoods = () => {
    console.log(1);
  };
  const uploadProductSubmitCallback = (e) => {
    uploadInfo.file =
      document.querySelector('input[type="file"]').files[0] || "";
    const user_seller_token = localStorage.getItem("user_token_seller");
    console.log(user_seller_token);
    axios
      .post(`http://localhost:8080/api/good`, getFormData(uploadInfo), {
        headers: {
          Authorization: `Bear ${user_seller_token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
    console.log(1);
  };

  const handleUpload = () => {
    console.log(1);
  };
  const uploadInfoData = {
    name: "",
    price: "",
    label: "",
    number: "",
    text: "",
    file: "",
  };
  const [showManageProductCenter, setShowManageProductCenter] = useState(false);
  const [showUpload, ShowUpload] = useState(false);
  const [
    uploadInfo,
    uploadProductHandleChange,
    uploadProductSubmit,
    setUploadInfo,
  ] = useForm(uploadInfoData, uploadProductSubmitCallback);
  console.log(uploadInfo);

  /* 上架商品 */

  /*    个人中心    */

  const [isEdit, setIsEdit] = useState(false);
  const [isPersonalCenterRender, setIsPersonalCenterRender] = useState(false);

  const personalCenterSubmitCallback = () => {
    console.log(1);
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
        .put(
          `http://localhost:8080/api/buyer`,
          getFormData(personalCenterInfo),
          {
            headers: {
              Authorization: `Bear ${user_buyer_token}`,
            },
          }
        )
        .then(() => {
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

  /* 订单页面 */

  const [orderDisplayData, setOrderDisplayData] = useState(props);
  const [showSellerOrderCenter, setShowSellerOrderCenter] = useState(false);

  /* 导航栏 */

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

    axios
      .get(`http://localhost:8080/api/order/seller`, {
        headers: {
          Authorization: `Bear ${user_seller_token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setOrderDisplayData(res.data.data);
        if (orderDisplayData) {
          setShowSellerOrderCenter(true);
        }
      });

    axios
      .get(`http://127.0.0.1:8080/api/good`, {
        headers: {
          Authorization: `Bear ${user_seller_token}`,
        },
      })
      .then((res) => {
        setGoodsInfo(res.data.data);
        setShowManageProductCenter(true);
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
          uploadInfo,
          uploadProductHandleChange,
          uploadProductSubmit,
          handleUpload,
          setUploadInfo,
          showUpload,
          showManageProductCenter,
          goodsInfo,
          handleGoods,
          orderDisplayData,
          showSellerOrderCenter,
        })}
    </>
  );
}
