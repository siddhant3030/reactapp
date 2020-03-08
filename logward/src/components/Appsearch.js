import React, { Component } from "react";
import { Input } from "antd";
const { Search } = Input;

export default class Appsearch extends Component {
  render() {
    return (
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    );
  }
}
