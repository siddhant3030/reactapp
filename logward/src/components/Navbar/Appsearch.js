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

  handleSearch = () => {
    let searchText = this.searchText;
    console.log(searchText);
  };
  render() {
    return (
      <Search
        placeholder="input search text"
        onSearch={e => {
          this.setState({ searchText: e.target.value });
        }}
        style={{ width: 200 }}
      />
    );
  }
}
