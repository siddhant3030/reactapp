import React, { Component } from "react";
import List from "./List.js";

export default class ProductListMain extends Component {
  render() {
    // items = [];
    return (
      <div className="split right">
        <h2>Product Listing</h2>
        <div className="product-container">
          {List.map((item, key) => {
            const image = item.image
              ? require(`../../images/${item.image}`)
              : null;
            return (
              <>
                {image && (
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundRepeat: "no-repeat",
                      margin: 15,
                      width: 100,
                      height: 100,
                      borderRadius: 10
                      // opacity: 0.5
                    }}
                  >
                    <h4
                      style={{
                        paddingLeft: 18,
                        margin: 0,
                        fontSize: 13,
                        color: "#f2f2f2",
                        fontFamily: "fantasy",
                        paddingTop: 8
                      }}
                    >
                      {item.name}
                    </h4>
                    <h4
                      style={{
                        fontSize: 10,
                        color: "#f2f2f2",
                        paddingLeft: 35
                      }}
                    >
                      {item.price}
                    </h4>
                    <h4
                      style={{ fontSize: 8, color: "#f2f2f2", paddingLeft: 14 }}
                    >
                      {item.description}
                    </h4>
                  </div>
                )}
              </>
            );
          })}
        </div>
        {/* <button className="productButton">Product</button> */}
      </div>
    );
  }
}
