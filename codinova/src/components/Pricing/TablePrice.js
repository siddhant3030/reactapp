import React, { Component } from "react";

export default class TablePrice extends Component {
  render() {
    return (
      <div>
        <table id="customers" style={{ marginTop: 500 }}>
          <tr>
            <th>SubTotal</th>
            <th>4000 RS</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
        <button className="buttonSale">PROCESS SALE</button>
        <button className="buttonSalen">CANCEL SALE</button>
      </div>
    );
  }
}
