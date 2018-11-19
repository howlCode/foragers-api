import React, { Component } from "react";
import "./ReviewOrder.css";
import { connect } from "react-redux";
import ProductModal from "../Shop/ProductModal";
import { Link } from "react-router-dom";

class ReviewOrder extends Component {
  state = {
    product: [],
    isOpen: false
  };

  productModal = product => {
    this.setState({ product: product, isOpen: true });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <section className="section">
        <h1 className="title">Review Your Order</h1>
        <div className="columns is-multiline">
          {this.props.itemsInCart.map(item => (
            <div className="column is-one-fifth checkout-item" key={item.name}>
              <ul>
                <li className="hand" onClick={() => this.productModal(item)}>
                  <figure className="image is-64x64 review-img">
                    <img src={item.image} alt={item.name} />
                  </figure>
                </li>
                <li>
                  <p className="checkout-item-name">{item.name}</p>
                </li>
                <li>
                  <p className="checkout-item-price has-text-info">
                    ${item.cost}
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="subtotal">
          {this.props.itemsInCart.length > 0
            ? `Subtotal: $ ${this.props.subTotal}`
            : null}
        </div>
        {this.props.itemsInCart.length > 0 ? (
          <div className="change-order">
            <Link to={"/shop"} className="button is-warning is-pulled-left">
              Go Back and Shop More
            </Link>
            <Link className="button is-primary" to={"/checkout"}>
              Continue
            </Link>
          </div>
        ) : (
          <div className="change-order">
            <Link to={"/shop"} className="button is-warning">
              Go Back and Shop More
            </Link>
          </div>
        )}
        {this.state.product.length !== 0 ? (
          <ProductModal
            product={this.state.product}
            onClose={this.toggleModal}
            show={this.state.isOpen}
          />
        ) : null}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  itemsInCart: state.itemsInCart.itemsInCart,
  subTotal: state.itemsInCart.subTotal
});

export default connect(mapStateToProps)(ReviewOrder);
