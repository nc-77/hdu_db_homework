import React, { useState } from "react";

import {
  Table,
  Tag,
  Button,
  Collapse,
  Pagination,
  Divider,
  message,
  Form,
  Input,
  DatePicker,
  Select,
  Rate,
  Modal,
} from "antd";

const { Column } = Table;
const { Panel } = Collapse;

export const useTableList = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const TableList = () => (
    <>
      <Table
        bordered
        rowKey={(record) => record.id}
        /* dataSource={this.state.list}
        loading={this.state.loading} */
        pagination={false}
      >
        <Column
          title="序号"
          dataIndex="id"
          key="id"
          width={200}
          align="center"
          sorter={(a, b) => a.id - b.id}
        />
        <Column
          title="标题"
          dataIndex="title"
          key="title"
          width={200}
          align="center"
        />
        <Column
          title="作者"
          dataIndex="author"
          key="author"
          width={100}
          align="center"
        />
        <Column
          title="阅读量"
          dataIndex="readings"
          key="readings"
          width={195}
          align="center"
        />
        <Column
          title="推荐指数"
          dataIndex="star"
          key="star"
          width={195}
          align="center"
        />
        <Column
          title="时间"
          dataIndex="date"
          key="date"
          width={195}
          align="center"
        />
        <Column
          title="操作"
          key="action"
          width={195}
          align="center"
          render={(text, row) => (
            <span>
              <Button
                type="primary"
                shape="circle"
                icon="edit"
                title="编辑"
                /* onClick={this.handleEdit.bind(null, row)} */
              />
              <Divider type="vertical" />
              <Button
                type="primary"
                shape="circle"
                icon="delete"
                title="删除"
                /* onClick={this.handleDelete.bind(null, row)} */
              />
            </span>
          )}
        />
      </Table>
      <br />
      {/* <Pagination
        total={this.state.total}
        pageSizeOptions={["10", "20", "40"]}
        showTotal={(total) => `共${total}条数据`}
        onChange={this.changePage}
        current={this.state.listQuery.pageNumber}
        onShowSizeChange={this.changePageSize}
        showSizeChanger
        showQuickJumper
        hideOnSinglePage={true}
      /> */}
      {/* <EditForm
        currentRowData={this.state.currentRowData}
        wrappedComponentRef={(formRef) => (this.formRef = formRef)}
        visible={this.state.editModalVisible}
        confirmLoading={this.state.editModalLoading}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
      /> */}
    </>
  );

  return [state, TableList, setState];
};
