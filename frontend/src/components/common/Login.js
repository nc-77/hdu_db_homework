import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AppHeader from "./Header";
const { Header, Footer, Content } = Layout;

export default function Login() {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          /* onFinish={onFinish} */
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Checkbox>我是买家</Checkbox>
          <Checkbox>我是卖家</Checkbox>
          <Checkbox>我是管理员</Checkbox>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="#">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="#">register now!</a>
          </Form.Item>
        </Form>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

/* https://ant.design/components/form-cn/#components-form-demo-normal-login */
