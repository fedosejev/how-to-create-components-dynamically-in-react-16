import React from "react";

const Image = ({ source }) => (
  <img src={`./images/${source}`} alt="Example" className="w-25 m-2" />
);

export default Image;
