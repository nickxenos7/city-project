import React from "react";
import "./Upper.css";
import arrow from "../../assets/arrow.png";

const Upper = () => {
  return (
    <div className="upper container">
      <div className="upper-text">
        <h1>Zante Adventures: Your Ultimate Guide to the Island's Treasures</h1>
        <p>
          Dive into the beauty of Zakynthos with our curated content, designed
          to provide an immersive and informative experience. From stunning
          beaches and thrilling adventures to rich history and local traditions,
          Zante Adventures is your go-to source for all things Zakynthos.
        </p>
        {/* {" "} */}
        {/* <button className="btn"> */}
        {/* Explore more <img src={arrow} /> */}
        {/* </button>{" "} */}
        {/* */}
      </div>
    </div>
  );
};

export default Upper;
