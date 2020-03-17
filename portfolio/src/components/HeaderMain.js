import React, { Component } from "react";
import { BulbOutlined } from "@ant-design/icons";

export default class HeaderMain extends Component {
  render() {
    return (
      <div style={{ padding: 100, backgroundColor: "#222629" }}>
        <div className="flex-container">
          <div>
            <BulbOutlined />
          </div>
          <div>
            <h2 style={{ color: "#61892F" }}>Software Engineer</h2>
          </div>
          <div className="titleCon">
            <h2 style={{ color: "white", fontSize: 30 }}>
              Inquisitive Thinker
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
