import "../css/Home.css";
import oneantlerLogo from "../images/otherpics/oneantlerLogo_black.png";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="logo-title">
          <motion.img
            animate={{
              rotate: [360, 0, 0, 0, 0, 0, 0, 0, 0, 360],
            }}
            transition={{
              delay: 2,
              duration: 10,
              repeat: Infinity,
              repeatDelay: 10,
            }}
            className="one-antler-logo"
            src={oneantlerLogo}
            alt="oneantler logo"
          />
          <p>OneAntler</p>
        </div>
        <p className="logo-sub">THE WORK OF STEFAN DE CLERK</p>

        <motion.div
          className="down-arrow"
          initial={{
            y: -8,
          }}
          animate={{
            y: 8,
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
          }}
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
