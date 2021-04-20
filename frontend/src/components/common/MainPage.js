import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Layout } from "antd";
import image1 from "../../assets/img/rush.jpeg";
const { Content } = Layout;

export default function MainPage() {
  return (
    <Layout className="layout">
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
    </Layout>
  );
}
