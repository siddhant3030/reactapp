import React, { Component } from "react";
import { Row, Col, Button, Typography } from "antd";
import Appsearch from "./Appsearch";
const { Title, Text } = Typography;
export default class AppHeader extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <Text type="secondary">Project / Env 1.5</Text>
            <Title level={2} style={{ marginTop: 0 }}>
              Releases
            </Title>
            <div>
              <Button type="primary" style={{ marginRight: 20 }}>
                IN PROGRESS
              </Button>
              <Button type="primary" style={{ marginRight: 20 }}>
                UNRELEASED
              </Button>
              <Button type="primary">RELEASED</Button>
            </div>
          </Col>
          <Col span={8} offset={8}>
            <Appsearch />
          </Col>
        </Row>
      </div>
    );
  }
}
