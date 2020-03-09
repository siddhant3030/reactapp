import React, { Component } from "react";

import "./App.css";
import ReleaseTable from "./components/ReleaseTable";
import tableData from "./components/ReleaseTable/data";
import AppHeader from "./components/Navbar/AppHeader";
import { Layout } from "antd";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      rowData: []
    };
  }

  componentDidMount() {
    this.setState({ data: tableData });
  }

  addRelease = newData => {
    this.setState({ data: [...this.state.data, newData] });
  };

  deleteRelease = id => {
    console.log("delete", id);
    this.setState({
      data: [...this.state.data].filter(item => item.id !== id)
    });
  };

  editRelease = data => {
    console.log("editRelease", data);
  };

  search = val => {
    let data = this.state.data;
    let filteredData = data.filter(item => {
      if (item.version.includes(val)) {
        return item;
      } else if (item.description.includes(val)) {
        return item;
      }
    });
    this.setState({ filteredData: filteredData });
  };

  filterRow = val => {
    console.log("value", val);
    this.setState({
      filteredData: [...this.state.data].filter(item => item.status === val)
    });
  };

  render() {
    return (
      <div className="App">
        <Layout style={{ backgroundColor: "white", margin: 40 }}>
          <div style={{ marginBottom: 25 }}>
            <AppHeader onSearch={this.search} filterRow={this.filterRow} />
          </div>

          <ReleaseTable
            data={
              this.state.filteredData.length > 0
                ? this.state.filteredData
                : this.state.data
            }
            onReleaseAdd={this.addRelease}
            onReleaseDelete={this.deleteRelease}
            onReleaseEdit={this.editRelease}
          />
        </Layout>
      </div>
    );
  }
}
