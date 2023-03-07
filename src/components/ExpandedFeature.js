import "../css/Expanded.css";
import { featureData } from "../utilities/data.js";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const ExpandedFeature = ({ close, currentPage }) => {
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
    closed: {
      opacity: 0,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: {
      opacity: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div className="modal" variants={modalVariants}>
        <motion.div className="modal_info" variants={modalInfoVariants}>
          <motion.div
            className="modal_row"
            variants={modalRowVariants}
          ></motion.div>

          <motion.div
            className="modal_description-wrapper"
            variants={modalRowVariants}
          >
            <span className="modal_title">
              {featureData[currentPage].title}
            </span>
            <p className="read-time">
              {featureData[currentPage].time} read<br></br>
              <br></br>
            </p>
            <p className="modal_body">{featureData[currentPage].body}</p>
          </motion.div>
          <motion.button
            className="modal_close-wrapper"
            whileHover={{ scale: 1.2 }}
            onClick={close}
          >
            <IoCloseCircleOutline className="modal_close-icon" />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandedFeature;
