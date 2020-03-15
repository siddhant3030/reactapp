import React, { Component } from "react";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, CodeOutlined } from "@ant-design/icons";

export default class MenuMain extends Component {
  render() {
    return (
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ backgroundColor: "black" }}
      >
        <Menu.Item key="1">
          <HomeOutlined />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined />
          <span>About</span>
        </Menu.Item>
        <Menu.Item key="3">
          <CodeOutlined />
          <span>Elixir</span>
        </Menu.Item>
        <Menu.Item key="4">
          <CodeOutlined />
          <span>React</span>
        </Menu.Item>
      </Menu>
    );
  }
}
