import React, { Component } from "react";
import { Row, Col, Button, Typography } from "antd";
import AppSearch from "./AppSearch";
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
              <Button
                type="primary"
                style={{ marginRight: 20 }}
                onClick={() => this.props.filterRow("IN PROGRESS")}
              >
                IN PROGRESS
              </Button>
              <Button
                type="primary"
                style={{ marginRight: 20 }}
                onClick={() => this.props.filterRow("UNRELEASED")}
              >
                UNRELEASED
              </Button>
              <Button
                type="primary"
                onClick={() => this.props.filterRow("RELEASED")}
              >
                RELEASED
              </Button>
            </div>
          </Col>
          <Col span={8} offset={8} style={{ alignSelf: "flex-end" }}>
            <AppSearch onSearch={this.props.onSearch} />
          </Col>
        </Row>
      </div>
    );
  }
}
