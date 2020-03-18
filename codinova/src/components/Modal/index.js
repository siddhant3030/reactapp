import React from "react";
import "./modal.css";
import { connect } from "react-redux";

class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
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
    const total = (subTotal - discount - vat).toFixed(2);
    const items =
      this.props.cartItems.length > 0
        ? this.props.cartItems.reduce((a, b) => a + parseInt(b.qty), 0)
        : 0;

    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2
          style={{
            backgroundColor: "#00264d",
            color: "white",
            fontWeight: 100
          }}
        >
          Receipt
        </h2>
        <h3 style={{ marginLeft: 170 }}>Sale No...00102</h3>
        <h4 style={{ marginLeft: 30 }}>Date</h4>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {this.props.cartItems.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{item.name}</th>
                  <th>{item.qty}</th>
                  <th>{item.qty * item.price}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table style={{ width: "100%", margin: 40 }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold" }}>Sub Total</td>
              <td colSpan={2}>{items} Total</td>
              <td style={{ fontWeight: "bold" }}>{total}</td>
            </tr>
            <tr>
              <td colSpan={3} style={{ fontWeight: "bold" }}>
                Discount
              </td>
              <td>{discount}</td>
            </tr>
            <tr>
              <td colSpan={3} style={{ fontWeight: "bold" }}>
                VAT
              </td>
              <td>{vat}</td>
            </tr>
          </tbody>
        </table>

        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart.items
  };
};

export default connect(mapStateToProps)(Modal);
