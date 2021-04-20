import React, { useState } from "react";

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

import { useInformationCenter } from "../common/useInformationCenter";

const { Content, Sider } = Layout;

export default function SellerPage() {
  const [source, setSource] = useState([]);
  const [data, InformationCenter, setState] = useInformationCenter(
    "test",
    "",
    source
  );

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
            物品管理
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            订单管理
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            个人信息
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <InformationCenter />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
