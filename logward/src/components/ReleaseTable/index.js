import React, { Component } from "react";
import { Table, Tag, Progress, Button, Popconfirm, Typography } from "antd";
import TableFooter from "./TableFooter";
import { DeleteOutlined } from "@ant-design/icons";
import EditModal from "./EditModal";

const { Text } = Typography;

export default class ReleaseTable extends Component {
  constructor() {
    super();

    this.columns = [
      {
        title: "Version",
        dataIndex: "version",
        key: "version",
        render: text => <Text strong>{text}</Text>
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: status => {
          var color = "";
          if (status === "IN PROGRESS") {
            color = "blue";
          } else if (status === "UNRELEASED") {
            color = "yellow";
          } else if (status === "RELEASED") {
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
        render: record => (
          <span>
            <EditModal record={record} />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.props.onReleaseDelete(record.id)}
            >
              <Button icon={<DeleteOutlined />}>Delete</Button>
            </Popconfirm>
          </span>
        )
      }
    ];
  }

  addNewRelease = release => {
    let newData = {
      id: this.props.data.length + 1,
      version: release.version,
      status: release.status,
      progress: release.progress,
      startdate: release.startDate,
      releasedate: release.endDate,
      description: release.description,
      action: ""
    };
    this.props.onReleaseAdd(newData);
  };

  render() {
    const columns = this.columns;
    console.log("columns", columns);

    return (
      <Table
        columns={columns}
        dataSource={this.props.data}
        footer={() => <TableFooter onAdd={this.addNewRelease} />}
      />
    );
  }
}
