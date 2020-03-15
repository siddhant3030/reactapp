import React, { Component } from "react";
import { Layout } from "antd";
import FooterMain from "./FooterMain.js";
import MenuMain from "./MenuMain.js";
import TableMain from "./TableMain.js";
import HeaderMain from "./HeaderMain.js";

const { Sider } = Layout;

export default class LayoutMain extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ backgroundColor: "black" }}
        >
          <div className="logo" />
          <MenuMain />
        </Sider>
        <Layout className="site-layout">
          <HeaderMain />
          <TableMain />
          <FooterMain />
        </Layout>
      </Layout>
    );
  }
}
