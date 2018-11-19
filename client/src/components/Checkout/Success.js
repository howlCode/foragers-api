import React from "react";
import { connect } from "react-redux";
import { orderSuccess } from "../../actions/shoppingActions";

const Success = props => {
  return (
    <section className="section">
      <h1 className="title">Your order has been completed!</h1>
      <h2 className="subtitle">
        You will receive an email confirmation shortly!
      </h2>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  orderSuccess: dispatch(orderSuccess())
});

export default connect(
  null,
  mapDispatchToProps
)(Success);
