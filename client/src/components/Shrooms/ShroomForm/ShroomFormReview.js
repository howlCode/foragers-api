import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions/shroomActions";

class ShroomFormReview extends Component {
  reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label className="label has-text-light">{label}</label>
        <div className="control">{this.props.formValues[name]}</div>
      </div>
    );
  });

  onSubmit = e => {
    e.preventDefault();

    const { postShroom, history, formValues } = this.props;

    postShroom(formValues, history);
  };

  render() {
    return (
      <section className="section">
        <h5 className="title">Please confirm your entries</h5>
        {this.reviewFields}
        <label className="label has-text-light">Edible?</label>
        <div className="control">
          {this.props.formValues.edible ? "Yes" : "No"}
        </div>
        <button
          className="button is-warning"
          style={{ marginRight: "5px" }}
          onClick={this.props.onCancel}
        >
          Back
        </button>
        <button onClick={this.onSubmit} className="button is-primary">
          Submit Mushroom
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.shroomForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(ShroomFormReview));
