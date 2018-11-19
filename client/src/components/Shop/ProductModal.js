import React from "react";
import "./ProductModal.css";
import { connect } from "react-redux";
import { addProducts, removeProducts } from "../../actions/shoppingActions";
import { Link } from "react-router-dom";

const ProductModal = props => {
  if (!props.show) {
    return null;
  }

  const handleAdd = product => {
    if (props.auth !== false) {
      props.addProducts(product);
      props.onClose();
    }
  };

  const handleRemove = product => {
    if (props.auth !== false) {
      props.removeProducts(product);
      props.onClose();
    }
  };

  const showAdd = product => {
    if (props.auth !== false && !props.itemsInCart.includes(product)) {
      return (
        <button
          className="button is-primary"
          onClick={() => handleAdd(props.product)}
        >
          Add to Cart
        </button>
      );
    } else if (props.itemsInCart.includes(product)) {
      return (
        <button
          className="button is-warning"
          onClick={() => handleRemove(props.product)}
        >
          Remove From Cart
        </button>
      );
    } else {
      return (
        <Link to={"/portal"} className="button is-warning">
          Log in to place an order
        </Link>
      );
    }
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <p className="image">
          <img
            className="product-modal-image"
            src={props.product.image}
            alt={props.product.name}
          />
        </p>
        <p className="has-text-light has-text-centered name">
          {props.product.name}
        </p>
        <p className="has-text-light has-text-centered">
          <span className="has-text-info">${props.product.cost}</span>
        </p>
        <p className="has-text-light has-text-centered description">
          {props.product.description}
        </p>
        <p className="has-text-centered">{showAdd(props.product)}</p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  itemsInCart: state.itemsInCart.itemsInCart
});

const mapDispatchToProps = dispatch => ({
  addProducts: product => dispatch(addProducts(product)),
  removeProducts: product => dispatch(removeProducts(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductModal);
