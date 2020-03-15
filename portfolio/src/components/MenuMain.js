import React, { Component } from "react";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export default class MenuMain extends Component {
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <HomeOutlined />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined />
          <span>About</span>
        </Menu.Item>
      </Menu>
    );
  }
}
