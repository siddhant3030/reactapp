// import React, { Component } from "react";
// import { Modal, Button } from "antd";
// import { EditOutlined } from "@ant-design/icons";
// import TableFooter from "./TableFooter";

// export default class EditModal extends Component {
//   state = { visible: false };

//   showModal = () => {
//     this.setState({
//       visible: true
//     });
//   };

//   handleOk = e => {
//     console.log(e);
//     this.setState({
//       visible: false
//     });
//   };

//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false
//     });
//   };

//   render() {
//     console.log("data", this.props.record);
//     return (
//       <React.Fragment>
//         <Button
//           style={{ marginRight: 10 }}
//           icon={<EditOutlined />}
//           onClick={() => this.setState({ visible: true })}
//         >
//           Edit
//         </Button>
//         <Modal
//           title="Edit Release"
//           visible={this.state.visible}
//           // onOk={this.handleOk}
//           onCancel={this.handleCancel}
//           footer={null}
//         >
//           <TableFooter
//             isEditable={true}
//             onAdd={() => {}}
//             data={this.props.record}
//           />
//         </Modal>
//       </React.Fragment>
//     );
//   }
// }
