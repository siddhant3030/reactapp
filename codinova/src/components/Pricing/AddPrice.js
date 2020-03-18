import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct
} from "../../actions/cart.js";

class AddPrice extends Component {
  render() {
    console.log("props", this.props.cartItems);

    if (!this.props.cartItems || this.props.cartItems.length < 1) {
      return (
        <div
          style={{
            background: "white",
            fontSize: 30,
            Color: "#bfbfbf",
            paddingLeft: 50,
            paddingTop: 10,
            paddingBottom: 10,
            margin: 10
          }}
        >
          THERE ARE NO PRODUCTS
        </div>
      );
    }
    return (
      <>
        {this.props.cartItems.map((item, index) => {
          return (
            <ul className="addPrice" key={index}>
              <li>
                <button
                  onClick={() => {
                    this.props.deleteProduct(item.name);
                  }}
                  style={{
                    borderRadius: 50,
                    backgroundColor: "red",
                    color: "white",
                    marginTop: 13,
                    marginLeft: 10
                  }}
                >
                  x
                </button>
              </li>
              <li>
                <a>{item.name}</a>
              </li>
              <li>
                <a>{item.price}</a>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.props.decreaseQuantity(item.name);
                  }}
                  style={{
                    marginTop: 13,
                    backgroundColor: "#b3b3b3",
                    borderRadius: 5,
                    color: "white"
                  }}
                >
                  -
                </button>
                <button>{item.qty}</button>
                <button
                  onClick={() => this.props.increaseQuantity(item.name)}
                  style={{
                    marginTop: 13,
                    backgroundColor: "#b3b3b3",
                    borderRadius: 5,
                    color: "white"
                  }}
                >
                  +
                </button>
              </li>
              <li>
                <a>{item.qty * item.price}</a>
              </li>
            </ul>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items
  };
};

export default connect(mapStateToProps, {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct
})(AddPrice);
