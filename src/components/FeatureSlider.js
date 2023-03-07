import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { featureData } from "../utilities/data.js";
import ExpandedBackground from "./ExpandedBackground";
import ExpandedFeature from "./ExpandedFeature";

import "../css/FeatureSlider.css";

// detect direction with slider button click
const variants = {
  enter: (direction) => {
    return {
      x: direction < 0 ? 900 : -900,
      opacity: 0,
    };
  },
  center: {
    x: 1,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? 900 : -900,
      opacity: 0,
    };
  },
};

// VARIANTS ABOVE PUT IN FILE

// Swipe offset & velocity (for mobile)
const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

// PAGE CURRENTLY DISPLAYED
let currentPage = 0;

const FeatureSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // cycle through slides left & right
  function rightTurn() {
    paginate(-1);
    if (currentPage < featureData.length - 1) {
      currentPage++;
    } else {
      currentPage = 0;
    }
  }
  function leftTurn() {
    paginate(1);
    if (currentPage > 0) {
      currentPage--;
    } else {
      currentPage = featureData.length - 1;
    }
  }

  return (
    <>
      <div className="feature-frame">
        <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
          <motion.div
            key={page}
            whileHover={{
              transition: { duration: 0.15 },
            }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 600, damping: 50 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe > -swipeConfidenceThreshold) {
                leftTurn();
              } else if (swipe < swipeConfidenceThreshold) {
                rightTurn();
              }
            }}
          >
            <div className="feature-card-container">
              <div className="slider-card" key={featureData.id}>
                <>
                  <img
                    src={featureData[currentPage].image}
                    alt={featureData[currentPage].alt}
                    className="featured-image"
                  />
                  <div className="slider-card-info" onClick={openModal}>
                    <div className="slider-title">
                      {featureData[currentPage].title}
                    </div>
                    <div className="tag-container-feature">
                      <button className="feature-tag">
                        {featureData[currentPage].category}
                      </button>
                    </div>

                    <p className="slider-blurb">
                      {featureData[currentPage].blurb}
                    </p>
                  </div>
                </>
              </div>
            </div>
            <motion.div
              className="next"
              onClick={rightTurn}
              whileHover={{ scale: 1.25 }}
            >
              <FaChevronRight />
            </motion.div>

            <motion.div
              className="prev"
              onClick={leftTurn}
              whileHover={{ scale: 1.25 }}
            >
              <FaChevronLeft />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {open && (
        <ExpandedBackground close={closeModal} currentPage={currentPage}>
          <ExpandedFeature close={closeModal} currentPage={currentPage} />
        </ExpandedBackground>
      )}
    </>
  );
};

export default FeatureSlider;
