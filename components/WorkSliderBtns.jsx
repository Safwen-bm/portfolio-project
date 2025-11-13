// components/WorkSliderBtns.jsx
"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, swiper }) => {
  if (!swiper) return null;

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <PiCaretLeftBold className="text-2xl" />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        <PiCaretRightBold className="text-2xl" />
      </button>
    </div>
  );
};

export default WorkSliderBtns;