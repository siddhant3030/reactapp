import React from "react";
import { Tag, Progress, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;

export default [
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
    render: () => (
      <span>
        <Button style={{ marginRight: 10 }} icon={<EditOutlined />}>
          Edit
        </Button>
        <Button icon={<DeleteOutlined />}>Delete</Button>
      </span>
    )
  }
];
