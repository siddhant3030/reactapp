import React, { Component } from "react";
import { Input } from "antd";
const { Search } = Input;

export default class Appsearch extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }

  handleSearch = value => {
    console.log(value);
  };
  render() {
    return (
      <Search
        placeholder="Search..."
        onSearch={this.props.onSearch}
        size="large"
      />
    );
  }
}
