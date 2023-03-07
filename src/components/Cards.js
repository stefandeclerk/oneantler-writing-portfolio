import "../css/Cards.css";

import { motion, AnimatePresence } from "framer-motion";

const Cards = ({ data, open }) => {
  const { category, title, blurb, image, alt } = data;

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        className="card"
        onClick={open}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2, damping: 100 },
        }}
        style={{ cursor: "pointer" }}
      >
        <div>
          <div>
            <img src={image} alt={alt} className="pics" />
            <div className="tag-container">
              <button className="tag-card">{category}</button>
            </div>
            <div className="card-title">{title}</div>
            <p className="card-blurb">{blurb}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cards;
