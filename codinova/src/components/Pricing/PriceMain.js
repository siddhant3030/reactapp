import React, { Component } from "react";
import AddPrice from "./AddPrice";
import TablePrice from "./TablePrice";

export default class PriceMain extends Component {
  render() {
    return (
      <div className="split left">
        <ul style={{ marginLeft: 150 }}>
          <li style={{ marginRight: 10 }}>
            <a>Product</a>
          </li>
          <li>
            <a>Price</a>
          </li>
          <li>
            <a>Quantity</a>
          </li>
          <li style={{ marginLeft: 50 }}>
            <a>Total</a>
          </li>
        </ul>
        <AddPrice />
        <TablePrice style={{ paddingBottom: 50 }} />
      </div>
    );
  }
}
