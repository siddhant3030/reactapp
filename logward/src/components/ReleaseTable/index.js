import React, { Component } from "react";
import { Table } from "antd";
import tableData from "./data";
import tableColumn from "./TableColumn";
import TableFooter from "./TableFooter";

export default class ReleaseTable extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: tableData });
  }

  addNewRelease = async release => {
    console.log("addNewRelease", release);

    let newData = {
      version: release.version,
      status: release.status,
      progress: release.progress,
      startdate: "06/12/16",
      releasedate: "28/09/16",
      description: release.description,
      action: ""
    };

    await this.setState({ data: [...this.state.data, newData] });
    console.log("data", this.state.data);
  };

  render() {
    const columns = tableColumn;
    console.log("data::render", this.state.data);

    return (
      <Table
        columns={columns}
        dataSource={this.state.data}
        footer={() => <TableFooter onAdd={this.addNewRelease} />}
      />
    );
  }
}
