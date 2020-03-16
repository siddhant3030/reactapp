import React, { Component } from "react";

export default class AddPrice extends Component {
  render() {
    return (
      <ul className="addPrice">
        <li>
          <a>Sweater</a>
        </li>
        <li>
          <a>1000 Rs</a>
        </li>
        <li>
          <button>-</button>
          <button></button>
          <button>+</button>
        </li>
        <li>
          <a>2000 Rs</a>
        </li>
      </ul>
    );
  }
}
