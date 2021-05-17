import React, { useEffect } from "react";
import { useForm } from "../components/useFrom";
import axios from "axios";

export default function BuyerPage() {
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
        console.log(res);
      });
  }, []);

  return <div>1</div>;
}
