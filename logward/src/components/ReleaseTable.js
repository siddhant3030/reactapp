import React, { Component } from "react";
import { Table, Tag, Progress } from "antd";
import TableFooter from "./TableFooter";

export default class ReleaseTable extends Component {
  render() {
    const columns = [
      {
        title: "Version",
        dataIndex: "version",
        key: "version",
        render: text => <a>{text}</a>
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: status => {
          var color = "";
          if (status == "IN PROGRESS") {
            color = "blue";
          } else if (status == "UNRELEASED") {
            color = "yellow";
          } else if (status == "RELEASED") {
            color = "green";
          }
          return (
            <span>
              <Tag color={color}>{status.toUpperCase()}</Tag>
            </span>
          );
        }
      },
      {
        title: "Progress",
        dataIndex: "progress",
        key: "progress",
        render: percent => (
          <span>
            <Progress percent={percent} />
          </span>
        )
      },
      {
        title: "StartDate",
        key: "startdate",
        dataIndex: "startdate"
      },
      {
        title: "ReleaseDate",
        key: "releasedate",
        dataIndex: "releasedate"
      },
      {
        title: "Description",
        key: "description",
        dataIndex: "description"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a style={{ marginRight: 16 }}>Invite {record.name}</a>
            <a>Delete</a>
          </span>
        )
      }
    ];

    const data = [
      {
        version: "Version 4.0",
        status: "IN PROGRESS",
        progress: 51,
        startdate: "01/06/17",
        releasedate: "---",
        description: "Version 4.0",
        action: ""
      },
      {
        version: "Version 3.0",
        status: "UNRELEASED",
        progress: 0,
        startdate: "11/06/17",
        releasedate: "---",
        description: "Version 3.0",
        action: ""
      },
      {
        version: "Version 1.5",
        status: "UNRELEASED",
        progress: 0,
        startdate: "22/08/16",
        releasedate: "---",
        description: "Version 1.5",
        action: ""
      },
      {
        version: "Version 1.3",
        status: "RELEASED",
        progress: 100,
        startdate: "07/05/16",
        releasedate: "28/09/16",
        description: "Version 1.3",
        action: ""
      },
      {
        version: "Version 1.2",
        status: "RELEASED",
        progress: 100,
        startdate: "06/20/16",
        releasedate: "10/01/16",
        description: "Version 1.2",
        action: ""
      },
      {
        version: "Version 1.0",
        status: "RELEASED",
        progress: 100,
        startdate: "06/12/16",
        releasedate: "28/09/16",
        description: "Version 1.0",
        action: ""
      }
    ];

    return (
      <Table
        columns={columns}
        dataSource={data}
        footer={() => <TableFooter />}
      />
    );
  }
}
