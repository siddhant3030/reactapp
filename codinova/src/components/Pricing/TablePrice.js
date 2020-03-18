import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import { resetCart } from "../../actions/cart";

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
    const items =
      this.props.cartItems.length > 0
        ? this.props.cartItems.reduce((a, b) => a + parseInt(b.qty), 0)
        : 0;
    const total = (subTotal - discount - vat).toFixed(2);
    return (
      <div>
        <div style={{ margin: 35 }}>
          <table
            className="customerTable"
            id="customers"
            style={{
              marginTop: 350
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
          <button
            className="buttonSale"
            disabled={this.props.cartItems.length > 0 ? false : true}
            onClick={e => this.showModal(e)}
          >
            PROCESS SALE
          </button>
          <button
            className="buttonSalen"
            onClick={() => {
              this.props.resetCart();
            }}
          >
            CANCEL SALE
          </button>
        </div>
        <Modal onClose={this.showModal} show={this.state.show}></Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items
  };
};

export default connect(mapStateToProps, { resetCart })(TablePrice);
