import React, { useState } from "react";
import FilterCardFeature from "./FeatureSlider";
import ExpandedBackground from "./ExpandedBackground";
import ExpandedFeature from "./ExpandedFeature";
import { AnimatePresence } from "framer-motion";

const OpenCloseFeature = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <FilterCardFeature open={openModal} />
      <AnimatePresence>
        {open && (
          <ExpandedBackground close={closeModal}>
            <ExpandedFeature close={closeModal} />
          </ExpandedBackground>
        )}
      </AnimatePresence>
    </>
  );
};

export default OpenCloseFeature;
