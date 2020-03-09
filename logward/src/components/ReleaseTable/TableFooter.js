import React, { Component } from "react";
import {
  Input,
  Select,
  Row,
  Col,
  InputNumber,
  DatePicker,
  Button,
  message
} from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const { Option } = Select;

export default class TableFooter extends Component {
  constructor() {
    super();
    this.state = {
      version: "",
      status: "UNRELEASED",
      progress: "",
      description: "",
      startDate: "",
      endDate: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = () => {
    this.props.onAdd(this.state);
    message.success("Release added successfully");
    this.setState({
      version: "",
      status: "",
      progress: "0",
      startDate: "",
      releaseDate: "",
      description: "",
      isProgressEnabled: true
    });
  };

  handleProgress = val => {
    this.setState({
      progress: val
    });
  };

  handleStatus = val => {
    this.setState({ status: val });
    if (val === "RELEASED") {
      this.setState({ isProgressEnabled: false, progress: 100 });
    } else if (val === "UNRELEASED") {
      this.setState({ isProgressEnabled: false, progress: 0 });
    } else {
      this.setState({ isProgressEnabled: true, progress: 1 });
    }
  };

  handleDate = (date, dateString) => {
    console.log("start Date", dateString);
    this.setState({ startDate: dateString[0], endDate: dateString[1] });
  };
  componentDidMount() {
    console.log("componentDidMount called", this.props.data);
    if (this.props.isEditable) {
      this.setState({
        version: this.props.data.version,
        status: this.props.data.status,
        progress: this.props.data.progress,
        startDate: this.props.data.startDate,
        endDate: this.props.data.endDate,
        description: this.props.data.description
      });
    }
  }

  render() {
    return (
      <div>
        <Row gutter={[24, 30]}>
          <Col className="gutter-row">
            <Input
              name="version"
              placeholder="Version Name"
              onChange={this.handleChange}
              value={this.state.version}
            />
          </Col>
          <Col className="gutter-row">
            <Select
              defaultValue="UNRELEASED"
              value={this.state.status}
              onChange={this.handleStatus}
            >
              <Option value="UNRELEASED">Unreleased</Option>
              <Option value="IN PROGRESS">In Progress</Option>
              <Option value="RELEASED">Released</Option>
            </Select>
          </Col>
          <Col className="gutter-row">
            <InputNumber
              min={0}
              max={100}
              defaultValue={0}
              value={this.state.progress}
              onChange={this.handleProgress}
              disabled={!this.state.isProgressEnabled}
            />
          </Col>
          <Col className="gutter-row">
            <RangePicker
              onChange={this.handleDate}
              format={"DD/MM/YY"}
              // defaultValue={[
              //   moment(this.state.startDate, "DD-MM-YY"),
              //   moment(this.state.endDate, "DD-MM-YY")
              // ]}
            />
          </Col>
          <Col className="gutter-row">
            <Input
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </Col>
          <Col className="gutter-row">
            <Button
              type="primary"
              shape="round"
              icon={this.props.isEditable ? <EditOutlined /> : <PlusOutlined />}
              onClick={this.handleAdd}
            >
              {this.props.isEditable ? "SAVE" : "ADD"}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
