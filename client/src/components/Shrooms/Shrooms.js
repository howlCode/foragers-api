import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Shrooms.css";
import ShroomModal from "./ShroomModal";
import { connect } from "react-redux";
import { fetchShrooms } from "../../actions/shroomActions";

class Shrooms extends Component {
  state = {
    filteredShrooms: [],
    shroom: [],
    genus: [],
    isOpen: false
  };

  async componentDidMount() {
    await this.props.dispatch(fetchShrooms());
    let genusPool = [];
    this.props.shrooms.map(shroom => {
      if (!genusPool.includes(shroom.genus)) {
        genusPool.push(shroom.genus);
      }
      return genusPool;
    });
    this.setState({ genus: genusPool, filteredShrooms: this.props.shrooms });
  }

  shroomModal = shroom => {
    this.setState({ shroom: shroom, isOpen: true });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleSelection = selection => {
    if (this.props.shrooms.length !== 0) {
      if (selection.target.value !== "all") {
        const filteredShrooms = this.props.shrooms.filter(
          shroom => shroom.genus === selection.target.value
        );
        this.setState({ filteredShrooms: filteredShrooms });
      } else {
        this.setState({ filteredShrooms: this.props.shrooms });
      }
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
      <section className="section shroom-section">
        <div className="container is-fluid">
          <div className="field is-horizontal">
            <label className="label" style={{ marginRight: "20px" }}>
              Filter Shrooms
            </label>
            <label className="label filter-selector">Genus</label>
            <div className="has-text-centered control">
              <div className="select">
                <select onChange={this.toggleSelection}>
                  <option value="all">Show All</option>
                  {this.state.genus.map(genus => (
                    <option key={genus}>{genus}</option>
                  ))}
                </select>
              </div>
            </div>
            <Link
              to={"/shrooms/new"}
              className="button is-primary"
              style={{ marginLeft: "5px" }}
            >
              Add A Mushroom
            </Link>
          </div>

          <div className="columns is-multiline">
            {this.state.filteredShrooms.map(shroom => (
              <div
                className="column is-one-third hand"
                key={shroom.common_name}
                onClick={() => this.shroomModal(shroom)}
              >
                <figure className="image is-5by4">
                  <img
                    className="shroom-image"
                    src={shroom.image}
                    alt={shroom.common_name}
                  />
                </figure>
                <p className="has-text-weight-bold has-text-centered">
                  {shroom.common_name}
                </p>
                <p className="has-text-centered">
                  <span
                    className={
                      shroom.edible ? "tag is-primary" : "tag is-danger"
                    }
                  >
                    {shroom.edible ? "Edible" : "Not Edible"}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        {this.state.shroom.length !== 0 ? (
          <ShroomModal
            shroom={this.state.shroom}
            onClose={this.toggleModal}
            show={this.state.isOpen}
          />
        ) : null}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  shrooms: state.shrooms.shrooms,
  loading: state.shrooms.loading,
  error: state.shrooms.error
});

export default connect(mapStateToProps)(Shrooms);
