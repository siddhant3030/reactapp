import React, { Component } from "react";

export default class TablePrice extends Component {
  render() {
    return (
      <>
        <div style={{ margin: 35 }}>
          <table
            className="customerTable"
            id="customers"
            style={{
              marginTop: 400
              // marginLeft: 20,
              // marginRight: 20,
            }}
          >
            <tr>
              <th>SubTotal</th>
              <th>4000 RS</th>
              <th>0 Items</th>
            </tr>
            <tr>
              <td>VAT</td>
              <td>10%</td>
              <td>0.000</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>10%</td>
              <td>0.000</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>0.000 Eur</td>
            </tr>
          </table>
        </div>
        <div className="buttonParent">
          <button className="buttonSale">PROCESS SALE</button>
          <button className="buttonSalen">CANCEL SALE</button>
        </div>
      </>
    );
  }
}
