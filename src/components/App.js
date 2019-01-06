import React from "react";
import Image from "./Image";

const IMAGES = [
  "IMG_5774.jpg",
  "IMG_6305.jpg",
  "IMG_6701.jpg",
  "IMG_6732.jpg",
  "IMG_6795.jpg"
];

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12 text-center">
        {IMAGES.map(image => (
          <Image source={image} key={image} />
        ))}
      </div>
    </div>
  </div>
);

export default App;
