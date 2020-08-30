import React, { Component } from "react";
import "../Product/Product.css";
class CardProduct extends Component {
  state = {
    order: 4,
    name: "Ari",
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    } else {
      alert("tidak boleh minus");
    }
  };
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/sayap_tengah.jpg"
            alt=""
            srcset=""
          />
        </div>
        <p className="product-title">Daging Manusia</p>
        <p className="product-price">Rp. 500.000</p>
        <div className="counter">
          <button className="btn btn-warning" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="btn btn-primary" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
