import { Form, Input, Checkbox, Button, Layout } from "antd";
import { useEffect } from "react";
import axios from "axios";

const { Content } = Layout;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function Register() {
  const [form] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(1);
    console.log(form.validateFields);
  };

  const data = {
    username: "1234",
    password: "1234567",
    name: "zhaoqi",
    phone: "13661815232",
    nickname: "zhaoqi",
  };

  useEffect(() => {
    /* axios.post("http://localhost:8080/api/buyer/register", data).then((res) => {
      console.log(res);
    }); */
    axios.get("http://localhost:8080/api/buyer").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Layout>
      <Content>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          /* onFinish={onFinish} */
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
          onSubmit={handleSubmit}
        >
          <Form.Item
            name="studentCode"
            label="学号"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="studentName"
            label="姓名"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="昵称"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="密码确认"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* 手机号 */}
          {/* <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item> */}

          {/* <Form.Item
            name="identityCheck"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>我是买家</Checkbox>
            <Checkbox>我是卖家</Checkbox>
            <Checkbox>我是管理员</Checkbox>
          </Form.Item> */}
          <Form.Item {...tailFormItemLayout} onSubmit={handleSubmit}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}
