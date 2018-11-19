import React, { Component } from "react";
import "./ShoppingCart.css";
import CartItems from "./CartItems";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  state = {
    expanded: false
  };

  toggleShowContents = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  cartStatus = () => {
    if (this.props.items.length > 0) {
      return (
        <div className="shopping-cart">
          <button
            className="button is-primary populated-cart cart-button"
            onClick={this.toggleShowContents}
          >
            <i className="fas fa-shopping-cart" />
          </button>
          {this.state.expanded ? <CartItems /> : null}
        </div>
      );
    } else {
      return (
        <div className="shopping-cart">
          <button
            className="button is-dark empty-cart cart-button"
            onClick={this.toggleShowContents}
          >
            <i className="fas fa-shopping-cart" />
          </button>
          {this.state.expanded ? <CartItems /> : null}
        </div>
      );
    }
  };

  render() {
    return this.cartStatus();
  }
}

const mapStateToProps = state => ({
  items: state.itemsInCart.itemsInCart
});

export default connect(mapStateToProps)(ShoppingCart);
