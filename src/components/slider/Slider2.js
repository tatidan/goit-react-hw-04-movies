import React from "react";
import { Slide } from "react-slideshow-image";

const PauseHoverExample = () => {
  const fadeImages = [
    "assets/images/slide_5.jpg",
    "assets/images/slide_6.jpg",
    "assets/images/slide_7.jpg",
  ];

  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
  };

  return (
    <div>
      <h2>Fade Effect</h2>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} />
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-fade">
            <p>Second Slide</p>
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} />
            </div>
            <p>Third Slide</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default PauseHoverExample;
