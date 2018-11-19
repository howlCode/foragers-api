import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input
            {...input}
            className="checkbox"
            type="checkbox"
            style={{ margin: "5px" }}
          />
          {label}
        </label>
      </div>
      <div className="has-text-danger">{touched && error}</div>
    </div>
  );
};
