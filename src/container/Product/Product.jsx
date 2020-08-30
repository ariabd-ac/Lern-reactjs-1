import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";
class Product extends Component {
  state = {
    order: 4,
    name: "Ari",
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="" alt="" srcset="" />
          </div>
          <div className="troley">
            <img
              src="https://img.icons8.com/doodle/48/000000/wallet--v1.png"
              alt=""
              srcset=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
