import React from "react";
import "../App.css";
import "./Hero.css";
import { Button } from "../components/Button";
import { useHistory } from "react-router";
import HeroVideo from "../assets/videos/video-1.mp4";

function Hero() {
  let RouterHistory = useHistory();

  return (
    <div className="hero-container">
      <video src={HeroVideo} autoPlay loop muted />
      <h1>二手交易平台</h1>
      <p>数据库课程设计</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          onClick={() => {
            RouterHistory.push("/register");
          }}
        >
          注册
        </Button>
        <Button
          className="btns"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
          onClick={() => {
            RouterHistory.push("/login");
          }}
        >
          登录
        </Button>
      </div>
    </div>
  );
}

export default Hero;
