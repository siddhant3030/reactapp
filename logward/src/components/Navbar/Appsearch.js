import React, { Component } from "react";
import { AutoComplete } from "antd";

export default class Appsearch extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }

  render() {
    return (
      <AutoComplete
        style={{
          width: 400
        }}
        onSearch={this.props.onSearch}
        placeholder="Search.."
      />
    );
  }
}

/* <Search placeholder="Search..." onSearch={this.props.onSearch} size="large" />; */
