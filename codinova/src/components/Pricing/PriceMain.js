import React, { Component } from "react";
import AddPrice from "./AddPrice";
import TablePrice from "./TablePrice";

export default class PriceMain extends Component {
  render() {
    return (
      <div class="split left">
        <ul>
          <li>
            <a href="default.asp">Product</a>
          </li>
          <li>
            <a href="news.asp">Price</a>
          </li>
          <li>
            <a href="contact.asp">Quantity</a>
          </li>
          <li>
            <a href="about.asp">Total</a>
          </li>
        </ul>
        <AddPrice />
        <TablePrice style={{ paddingBottom: 50 }} />
      </div>
    );
  }
}
