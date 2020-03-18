import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity
} from "../../actions/cart.js";

class AddPrice extends Component {
  render() {
    console.log("props", this.props.cartItems);
    return (
      <>
        {this.props.cartItems.map((item, index) => {
          return (
            <ul className="addPrice" key={index}>
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
                >
                  -
                </button>
                <button>{item.qty}</button>
                <button onClick={() => this.props.increaseQuantity(item.name)}>
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
  decreaseQuantity
})(AddPrice);
