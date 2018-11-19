import React, { Component } from "react";
import "./Shop.css";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import ProductModal from "./ProductModal";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

class Shop extends Component {
  state = {
    filteredProducts: [],
    types: [],
    product: [],
    isOpen: false
  };

  async componentDidMount() {
    await this.props.dispatch(fetchProducts());
    let productTypes = [];
    this.props.products.map(product => {
      if (!productTypes.includes(product.type)) {
        productTypes.push(product.type);
      }
      return productTypes;
    });
    this.setState({
      types: productTypes,
      filteredProducts: this.props.products
    });
  }

  productModal = product => {
    this.setState({ product: product, isOpen: true });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleSelection = selection => {
    if (selection.target.value !== "all") {
      const filteredProducts = this.props.products.filter(
        product => product.type === selection.target.value
      );
      this.setState({ filteredProducts: filteredProducts });
    } else {
      this.setState({ filteredProducts: this.props.products });
    }
  };

  render() {
    const { error, loading } = this.props;

    if (error) {
      return (
        <section className="section">
          <div className="container">
            <h1 className="title has-text-danger">Error! {error.message}</h1>
          </div>
        </section>
      );
    }

    if (loading) {
      return (
        <section className="section">
          <div className="container">
            <p className="title loader" />
          </div>
        </section>
      );
    }

    return (
      <section className="section shop">
        <div className="field is-horizontal">
          <label className="label">Sort Products</label>
          <div className="has-text-centered control">
            <div className="select">
              <select onChange={this.toggleSelection}>
                <option value="all">Show All</option>
                {this.state.types.map(type => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <ShoppingCart />
        </div>
        <div className="columns is-multiline">
          {this.state.filteredProducts.map(product => (
            <div
              className="column is-two-fifths product-card hand"
              key={product.id}
              onClick={() => this.productModal(product)}
            >
              <div className="image is-128x128 product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <p className="product-name has-text-centered">{product.name}</p>

              <p className="price-line has-text-centered">
                <span className="has-text-info price">${product.cost}</span>
              </p>
            </div>
          ))}
        </div>
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
  products: state.products.products,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Shop);
