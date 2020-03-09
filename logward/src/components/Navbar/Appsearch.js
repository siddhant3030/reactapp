import React, { Component } from "react";
import { Input, AutoComplete } from "antd";
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
      <AutoComplete
        style={{
          width: 200
        }}
        onSearch={this.props.onSearch}
        placeholder="control mode"
      />
    );
  }
}

/* <Search placeholder="Search..." onSearch={this.props.onSearch} size="large" />; */
