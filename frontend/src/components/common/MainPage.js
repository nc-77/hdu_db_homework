import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./Header";
import image1 from "../../assets/img/rush.jpeg";
const { Header, Content, Footer } = Layout;

export default function MainPage() {
  return (
    <Layout className="layout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <div className="site-layout-content">
          <img alt="Dragon" src={image1} />
          <Button type="primary" shape="round" size="large">
            登陆
          </Button>
          <Button type="primary" shape="round" size="large">
            注册
          </Button>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>数据库课程设计</Footer>
    </Layout>
  );
}
