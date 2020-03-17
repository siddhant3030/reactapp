import React, { Component } from "react";
import { connect } from "react-redux";
class AddPrice extends Component {
  render() {
    console.log("props", this.props.cartItems);
    return (
      <>
        {this.props.cartItems.map(cart => {
          return (
            <ul className="addPrice">
              <li>
                <a>{cart.name}</a>
              </li>
              <li>
                <a>{cart.price}</a>
              </li>
              <li>
                <button>-</button>
                <button></button>
                <button>+</button>
              </li>
              <li>
                <a>{cart.description}</a>
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
    cartItems: state.cart
  };
};

export default connect(mapStateToProps)(AddPrice);
