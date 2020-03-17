import React, { Component } from "react";

import "./App.css";
import PriceMain from "./components/Pricing/PriceMain";
import ProductListMain from "./components/ProductList/ProductListMain";

export default class App extends Component {
  render() {
    return (
      <>
        <PriceMain />
        <ProductListMain />
      </>
    );
  }
}
