import React, { Component } from "react";
import List from "./List.js";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart";

class ProductListMain extends Component {
  constructor() {
    super();
    this.state = {
      price: null,
      description: null
    };
  }
  render() {
    return (
      <div className="split right">
        <div className="product-container">
          {List.map((item, index) => {
            const image = item.image
              ? require(`../../images/${item.image}`)
              : "https://via.placeholder.com/150";
            return (
              <React.Fragment key={index}>
                {image && (
                  <div
                    onClick={() => this.props.addToCart(item)}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundRepeat: "no-repeat",
                      margin: 15,
                      width: 100,
                      height: 100,
                      borderRadius: 20
                      // opacity: 0.5
                    }}
                    onMouseOver={() =>
                      this.setState({
                        price: item.price,
                        name: item.name,
                        description: item.description
                      })
                    }
                  >
                    <div
                      style={{
                        backgroundColor: `${item.rgb}`,
                        width: 100,
                        height: 100,
                        borderRadius: 10
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
                        {this.state.name === item.name && (
                          <span>{this.state.price} Rs</span>
                        )}
                      </h4>
                      <h4
                        style={{
                          fontSize: 8,
                          color: "#f2f2f2",
                          paddingLeft: 14
                        }}
                      >
                        {this.state.name === item.name &&
                          this.state.description}
                      </h4>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(null, { addToCart })(ProductListMain);
