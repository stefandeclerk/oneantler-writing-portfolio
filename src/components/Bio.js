import "../css/Bio.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { bio } from "../utilities/data";
import mugshot from "../images/otherpics/mugshot.jpg";
import React from "react";

function Bio() {
  let [changeText, setChangeText] = useState(true);
  const handleChange = () => {
    return setChangeText(!changeText);
  };

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          initial="enter"
          animate="center"
          exit="exit"
          className="bio-container"
        >
          <div className="bio-card" key={bio.id} onClick={() => handleChange()}>
            <>
              <img src={mugshot} alt="profile" className="bio-image" />
              <div>
                <div className="bio-title">WHO ME?</div>
                <p className="bio-info">{bio.blurb}</p>
              </div>
            </>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Bio;
