import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

const CourseMap = props => {
  const defaultProps = {
    center: {
      lat: props.latitude,
      lng: props.longitude
    }
  };
  return (
    <div style={{ height: "300px", width: "300px" }}>
      <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={13}>
        <AnyReactComponent
          lat={props.latitude}
          lng={props.longitude}
          text={props.location}
        />
      </GoogleMapReact>
    </div>
  );
};

export default CourseMap;
