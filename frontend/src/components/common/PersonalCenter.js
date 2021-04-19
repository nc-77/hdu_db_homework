import React from 'react';

import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default function PersonalCenter() {
    return(
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
            <Form.Item name={['user', 'studentCode']} label="学号" rules={[{ type: 'number'}]}>

            </Form.Item>
            <Form.Item name={['user', 'name']} label="姓名" >

            </Form.Item>
            <Form.Item name={['user', 'name']} label="昵称" >

            </Form.Item>
            <Form.Item name={['user', 'phone']} label="手机联系方式" >

            </Form.Item>
            <Form.Item name={['user', 'password']} label="密码" >

            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
                <Button type="primary" htmlType="submit">
                修改
                </Button>
            </Form.Item>
        </Form>
    );
}

