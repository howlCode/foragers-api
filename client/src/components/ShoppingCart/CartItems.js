import React from "react";
import "./CartItems.css";
import { connect } from "react-redux";
import { removeProducts } from "../../actions/shoppingActions";
import { Link } from "react-router-dom";

const CartItems = props => {
  const handleRemove = product => {
    props.removeProducts(product);
  };

  return (
    <div className="cart-items">
      <p className="cart-subtotal has-text-warning">
        Subtotal: ${props.subTotal > 0 ? props.subTotal : 0}{" "}
        {props.items !== null && props.items.length > 0 ? (
          <Link
            to={"/review-order"}
            className="button is-primary is-small is-pulled-right checkout-button"
          >
            Checkout
          </Link>
        ) : (
          <span>Your Cart is Empty</span>
        )}
      </p>
      <div className="columns is-multiline">
        {props.items
          ? props.items.map(item => (
              <div className="column is-full cart-item" key={item.name}>
                <img src={item.image} alt={item.name} className="item-img" />
                <p className="item-price has-text-warning is-pulled-right">
                  ${item.cost}
                </p>
                <p className="item-name">{item.name}</p>
                <button
                  className="button is-danger is-small remove-btn is-pulled-right"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.itemsInCart.itemsInCart,
  subTotal: state.itemsInCart.subTotal
});

const mapDispatchToProps = dispatch => ({
  removeProducts: product => dispatch(removeProducts(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);
