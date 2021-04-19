import React, { useState } from "react";
import { Button, Collapse, Form, Input, Select } from "antd";
import "antd/dist/antd.css";
const { Panel } = Collapse;

export const useSearch = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const SearchMenu = () => (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="筛选" key="1">
        <Form layout="inline">
          <Form.Item label="标题:">
            <Input />
          </Form.Item>
          <Form.Item label="类型:">
            <Select style={{ width: 120 }}>
              <Select.Option value="published">published</Select.Option>
              <Select.Option value="draft">draft</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="推荐指数:">
            <Select style={{ width: 120 }}>
              <Select.Option value={1}>★</Select.Option>
              <Select.Option value={2}>★★</Select.Option>
              <Select.Option value={3}>★★★</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" icon="search">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  );

  return [state, SearchMenu, setState];
};
