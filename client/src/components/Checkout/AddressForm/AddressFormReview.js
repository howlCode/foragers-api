import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import Payments from "../Payments";

class AddressFormReview extends Component {
  reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <h3 className="has-text-bold is-size-5">
          {this.props.formValues[name]}
        </h3>
      </div>
    );
  });

  render() {
    return (
      <section className="section has-text-centered">
        <h5 className="title">Please confirm your entries</h5>
        <h6 className="subtitle" style={{ marginTop: "20px" }}>
          Address:
        </h6>
        {this.reviewFields}
        <h6 className="subtitle" style={{ marginTop: "20px" }}>
          Total: $ {this.props.subTotal}
        </h6>
        <div
          className="checkout-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >
          <button
            className="button is-warning"
            style={{ marginRight: "5px" }}
            onClick={this.props.onCancel}
          >
            Back
          </button>
          <Payments />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.addressForm.values,
    subTotal: state.itemsInCart.subTotal
  };
}

export default connect(mapStateToProps)(withRouter(AddressFormReview));
