import React, { Component } from "react";
import { Layout } from "antd";
import FooterMain from "./FooterMain.js";
import MenuMain from "./MenuMain.js";
import TableMain from "./TableMain.js";
import HeaderMain from "./HeaderMain.js";
import Axios from "axios";

const { Sider } = Layout;

export default class LayoutMain extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  async componentDidMount() {
    const mydata = await Axios.get("https://api.medium.com/v1/me", {
      headers: {
        Authorization:
          "Bearer 2798f0841235ffa62e87f7e8070239fda0d5e0306c7026cde41e659c2231306d2"
      }
    }).catch(err => {
      console.log(err);
    });
    // console.log("mydata", mydata.data);
  }

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
          style={{ backgroundColor: "#222629" }}
        >
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
