import React, { Component } from "react";
import { Typography } from "antd";
import { Layout } from "antd";
const { Title } = Typography;
const { Header } = Layout;

export default class HeaderMain extends Component {
  render() {
    return (
      <Header className="" style={{ padding: 100, backgroundColor: "black" }}>
        <Title level={2} style={{ color: "white" }}>
          Thunking
        </Title>
      </Header>
    );
  }
}
