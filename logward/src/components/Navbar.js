import React, { Component } from "react";
import AppHeader from "./AppHeader";

import { Layout } from "antd";

const { Content } = Layout;

export default class Navbar extends Component {
  render() {
    return (
      <Layout style={{ backgroundColor: "white", margin: 40 }}>
        <Content>
          <AppHeader />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    );
  }
}
