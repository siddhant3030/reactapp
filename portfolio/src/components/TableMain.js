import React, { Component } from "react";
import CardMain from "./CardMain.js";
import { Row, Col } from "antd";

export default class TableMain extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={8}>
            <CardMain />
          </Col>
          <Col span={8}>
            <CardMain />
          </Col>
          <Col span={8}>
            <CardMain />
          </Col>
          <Col span={8}>
            <CardMain />
          </Col>
          <Col span={8}>
            <CardMain />
          </Col>
          <Col span={8}>
            <CardMain />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
