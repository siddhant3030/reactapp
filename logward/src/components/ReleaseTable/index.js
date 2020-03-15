import React, { useState } from "react";
import {
  Table,
  Tag,
  Progress,
  Button,
  Popconfirm,
  Typography,
  Form,
  InputNumber,
  Input,
  Select,
  DatePicker
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import TableFooter from "./TableFooter";
import { DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Option } = Select;

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ReleaseTable = props => {
  console.log("props", props.data);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState("");

  const isEditing = record => record.id === editingId;

  const edit = record => {
    form.setFieldsValue({ ...record });
    setEditingId(record.id);
  };

  const cancel = () => {
    setEditingId("");
  };

  const save = async id => {
    const row = await form.getFieldValue();
    console.log("id", id, row);
    props.onReleaseEdit(id, row);
    setEditingId("");
  };

  const columns = [
    {
      title: "Version",
      dataIndex: "version",
      key: "version",
      editable: true,
      inputType: <Input />,
      render: text => <Text strong>{text}</Text>
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      inputType: (
        <Select defaultValue="UNRELEASED">
          <Option value="UNRELEASED">Unreleased</Option>
          <Option value="IN PROGRESS">In Progress</Option>
          <Option value="RELEASED">Released</Option>
        </Select>
      ),
      editable: true,
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
      editable: true,
      inputType: <InputNumber min={0} max={100} defaultValue={0} />,
      render: percent => (
        <span>
          <Progress percent={percent} />
        </span>
      )
    },
    {
      title: "StartDate",
      key: "startdate",
      dataIndex: "startdate",
      inputType: <Input />,
      editable: true
    },
    {
      title: "ReleaseDate",
      key: "releasedate",
      dataIndex: "releasedate",
      inputType: <Input />,
      editable: true
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
      inputType: <Input />,
      editable: true
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record.id)}
              style={{
                marginRight: 8
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Button
              style={{ marginRight: 10 }}
              icon={<EditOutlined />}
              disabled={editingId !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Button>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => props.onReleaseDelete(record.id)}
            >
              <Button icon={<DeleteOutlined />}>Delete</Button>
            </Popconfirm>
          </span>
        );
      }
    }
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.inputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });

  const addNewRelease = release => {
    let newData = {
      id: props.data.length + 1,
      version: release.version,
      status: release.status,
      progress: release.progress,
      startdate: release.startDate,
      releasedate: release.endDate,
      description: release.description,
      action: ""
    };
    props.onReleaseAdd(newData);
  };

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell
          }
        }}
        columns={mergedColumns}
        dataSource={props.data}
        footer={() => <TableFooter onAdd={addNewRelease} />}
      />
    </Form>
  );
};

export default ReleaseTable;
