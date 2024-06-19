import React, { useRef } from "react";
import "./Testimonials.css";
import rightArrow from "../../assets/right-arrow.png"; 
import leftArrow from "../../assets/left-arrow.png"; 

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 50; 
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 50; 
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={rightArrow}
        alt="Right Arrow"
        className="right-btn"
        onClick={slideForward}
      />
      <img
        src={leftArrow}
        alt="Left Arrow"
        className="left-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>John Burton</h3>
                  <span>Nottingham, UK</span>
                </div>
              </div>
              <p>
                "Our hiking tour with Anastasios was fantastic! His enthusiasm
                is contagious. The trails were beautiful, and we even spotted
                some rare wildlife. Anastasios made sure everyone was
                comfortable and enjoying the hike. A must-do activity in
                Zakynthos!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Claudia Freebington</h3>
                  <span>Texas, USA</span>
                </div>
              </div>
              <p>
                "Diving with Zante Adventures was an incredible experience!
                Kostas is an amazing instructor who made me feel completely at
                ease underwater. The marine life was breathtaking, and I learned
                so much about marine conservation. I can't wait to come back and
                dive again!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>George Xypoloukas</h3>
                  <span>Bilbao, Spain</span>
                </div>
              </div>
              <p>
                "Kayaking with Spiros was the highlight of our trip! The clear
                waters and beautiful scenery made for an unforgettable
                adventure. Spiros's passion for water sports and his dedication
                to safety made the experience both thrilling and secure. Highly
                recommend!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
