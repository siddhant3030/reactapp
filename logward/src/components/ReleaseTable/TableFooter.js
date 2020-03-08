import React, { Component } from "react";
import { Input, DatePicker, Row, Col } from "antd";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default class TableFooter extends Component {
  constructor() {
    super();
    this.state = {
      version: "",
      status: "",
      progress: "",
      description: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = () => {
    console.log("ADD::this.state", this.state);
    this.props.onAdd(this.state);
    this.setState({
      version: "",
      status: "",
      progress: "",
      description: ""
    });
  };

  render() {
    return (
      <Row gutter={21}>
        <Col span="6">
          <Input
            name="version"
            placeholder="Version Name"
            onChange={this.handleChange}
            value={this.state.version}
          />
        </Col>
        <Col span="3">
          <Input
            name="status"
            placeholder="Status"
            onChange={this.handleChange}
            value={this.state.status}
          />
        </Col>
        <Col span="3">
          <Input
            name="progress"
            placeholder="Progress"
            onChange={this.handleChange}
            value={this.state.progress}
          />
        </Col>
        <Col span="3">
          <DatePicker />
        </Col>
        <Col span="3">
          <DatePicker />
        </Col>
        <Col span="3">
          <Input
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </Col>
        <Col>
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            onClick={this.handleAdd}
          >
            ADD
          </Button>
        </Col>
      </Row>
    );
  }
}
