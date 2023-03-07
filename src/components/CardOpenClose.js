import React, { useState } from "react";
import Cards from "./Cards";
import ExpandedBackground from "./ExpandedBackground";
import ExpandedCard from "./ExpandedCard";
import { AnimatePresence } from "framer-motion";

const CardOpenClose = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Cards data={data} open={openModal} />
      <AnimatePresence>
        {open && (
          <ExpandedBackground close={closeModal}>
            <ExpandedCard data={data} close={closeModal} />
          </ExpandedBackground>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardOpenClose;
