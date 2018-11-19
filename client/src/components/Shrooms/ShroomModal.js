import React from "react";
import "./ShroomModal.css";

const ShroomModal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <p className="image is-4by3">
          <img
            className="shroom-image"
            src={props.shroom.image}
            alt={props.shroom.common_name}
          />
        </p>
        <p className="has-text-light has-text-centered name">
          {props.shroom.common_name}
        </p>
        <p className="has-text-light has-text-centered is-italic genus">
          {props.shroom.genus}
        </p>
        <p className="has-text-centered edibile">
          <span
            className={props.shroom.edible ? "tag is-primary" : "tag is-danger"}
          >
            {props.shroom.edible ? "Edible" : "Not Edible"}
          </span>
        </p>
        <p className="has-text-light has-text-justified description">
          {props.shroom.description}
        </p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      />
    </div>
  );
};

export default ShroomModal;
