import React, { useState } from "react";

import { Form, Input, InputNumber, Button } from "antd";

export const useInformationCenter = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const InformationCenter = () => (
    <Form name="nest-messages">
      <Form.Item
        name={["user", "studentCode"]}
        label="学号"
        rules={[{ type: "number" }]}
      ></Form.Item>
      <Form.Item name={["user", "name"]} label="姓名"></Form.Item>
      <Form.Item name={["user", "name"]} label="昵称"></Form.Item>
      <Form.Item name={["user", "phone"]} label="手机联系方式"></Form.Item>
      <Form.Item name={["user", "password"]} label="密码"></Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" htmlType="submit">
          修改
        </Button>
      </Form.Item>
    </Form>
  );

  return [state, InformationCenter, setState];
};
