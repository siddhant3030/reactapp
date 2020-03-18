import React, { Component } from "react";
import { connect } from "react-redux";

class TablePrice extends Component {
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
                <td>SubTotal</td>
                <td>{subTotal} Rs</td>
                <td>{items} items</td>
              </tr>
              <tr>
                <td>VAT</td>
                <td>10%</td>
                <td>{vat}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>10%</td>
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
