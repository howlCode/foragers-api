import React from "react";

export default ({ input, label, placeholder, meta: { error, touched } }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea {...input} className="textarea" placeholder={placeholder} />
      </div>
      <div className="has-text-danger">{touched && error}</div>
    </div>
  );
};
