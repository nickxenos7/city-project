import React from "react";
import "./Activities.css";
import diving from "../../assets/diving.png"; 
import kanoe from "../../assets/kanoe.png"; 
import hiking from "../../assets/hiking.png"; 

const Activities = () => {
  return (
    <div className="activities-container">
      <div className="activities">
        <div className="activity">
          <img src={diving} alt="Diving" />
          <div className="caption">
            <p>Diving</p>
          </div>
        </div>
        <div className="activity">
          <img src={kanoe} alt="Kayaking" />
          <div className="caption">
            <p>Kayaking</p>
          </div>
        </div>
        <div className="activity">
          <img src={hiking} alt="Hiking" />
          <div className="caption">
            <p>Hiking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
