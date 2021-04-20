import React from "react";
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

const { Content, Sider } = Layout;

export default function AdministratorPage() {
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            用户管理
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            安全管理
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            物品种类管理
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            评价反馈管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
