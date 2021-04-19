import React from "react";
import "antd/dist/antd.css";
import AppHeader from "../common/Header";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import PersonalCenter from "../common/PersonalCenter";
import OrderCenter from "./OrderCenter";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function BuyingPage() {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Header>
          <AppHeader />
        </Header>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            市场
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            订单中心
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            个人中心
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <OrderCenter />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
