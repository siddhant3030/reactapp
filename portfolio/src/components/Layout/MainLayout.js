import React, { Component } from "react";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu;
const { Header } = Layout;

export default class MainLayout extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <Menu
              style={{ marginTop: 40, backgroundColor: "black" }}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Elixir</Menu.Item>
              <Menu.Item key="4">React</Menu.Item>
              <Menu.Item key="5">Opensource</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
    );
  }
}
