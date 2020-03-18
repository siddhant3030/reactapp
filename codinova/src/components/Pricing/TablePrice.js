import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";

class TablePrice extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    const subTotal =
      this.props.cartItems.length > 0
        ? this.props.cartItems.reduce(
            (a, b) => a + parseInt(b.price * b.qty),
            0
          )
        : 0;
    const discount = (subTotal * 0.1).toFixed(2);
    const vat = (subTotal * 0.1).toFixed(2);
    const items = this.props.cartItems.length;
    const total = (subTotal - discount - vat).toFixed(2);
    return (
      <div>
        <div style={{ margin: 35 }}>
          <table
            className="customerTable"
            id="customers"
            style={{
              marginTop: 500
            }}
          >
            <tbody>
              <tr>
                <td style={{ color: "green" }}>SubTotal</td>
                <td>{subTotal} Rs</td>
                <td>{items} items</td>
              </tr>
              <tr>
                <td>VAT</td>
                <td style={{ color: "red" }}>10%</td>
                <td>{vat}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td style={{ color: "red" }}>10%</td>
                <td>{discount}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td style={{ color: "green" }}>{total} Rs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttonParent">
          <button className="buttonSale">PROCESS SALE</button>
          <button className="buttonSalen">CANCEL SALE</button>
        </div>
        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          show Modal{" "}
        </button>
        <Modal onClose={this.showModal} show={this.state.show}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>
        {/* <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items
  };
};

export default connect(mapStateToProps)(TablePrice);
