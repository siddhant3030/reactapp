import React, { Component } from "react";
import { Input, DatePicker, Row, Col } from "antd";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default class TableFooter extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <Row gutter={16}>
        <Col span="10">
          <Input placeholder="Version Name" />
        </Col>
        <Col span="3">
          <DatePicker onChange={this.onChange} />
        </Col>
        <Col span="3">
          <DatePicker onChange={this.onChange} />
        </Col>
        <Col span="6">
          <Input placeholder="Description" />
        </Col>
        <Col>
          <Button type="primary" shape="round" icon={<PlusOutlined />}>
            ADD
          </Button>
        </Col>
      </Row>
    );
  }
}
