import "../css/Navbar.css";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import oneantlerLogoWhite from "../images/otherpics/oneantlerLogo_white.png";
import { menuItems, contactDetails } from "../utilities/data.js";
import CategoryContext from "./User/CategorySelect";

const items = menuItems[0].submenu;
const contact = contactDetails[0].submenu;

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: 1,
    },
  },
};

const dropdownVariants = {
  enter: { opacity: 0 },
  showing: { opacity: 1, transition: { opacity: { duration: 0.3 } } },
  exit: { opacity: 0, transition: { opacity: { duration: 0.8 } } },
};

// OPEN & CLOSE CATEGORY MENU

function MenuItems() {
  const [open, cycleOpen] = useCycle(false, true);
  const { setCategory } = useContext(CategoryContext);

  let ref = useRef();

  // CATEGORIES DROPDOWN TITLE
  return (
    <li className="menu-items" ref={ref}>
      <AnimatePresence>
        <motion.button
          className="cat-button-title"
          onClick={cycleOpen}
          whileTap={{ scale: 0.95 }}
        >
          {open ? "Categories" : "Categories"}
        </motion.button>

        {open && (
          <motion.div
            className="dropdown-container"
            variants={dropdownVariants}
            initial="enter"
            animate="showing"
            exit="exit"
          >
            <motion.div
              className="dropdown-block"
              style={{ cursor: "pointer" }}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {items.map(({ title, id }) => (
                <motion.a
                  key={id}
                  className="menu-items"
                  style={{ cursor: "pointer" }}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  onClick={() => {
                    setCategory(title);
                    cycleOpen();
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {title}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function refreshPage() {
  window.location.reload(false);
}

// MAIN NAVBAR
export default function Navbar() {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > 200;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  const navbarVariants = {
    enter: { opacity: 0 },
    showing: { opacity: shouldShowActions ? 1 : 0 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <nav>
        <motion.div
          variants={navbarVariants}
          initial="enter"
          animate="showing"
          exit="exit"
          transition={{ opacity: { duration: 1 } }}
        >
          <div className="navbar">
            <div className="cats-menu">
              <div className="menuFunc">
                <MenuItems />
              </div>
            </div>
            <div className="contactInfo">
              <p>{contact[0].email}</p>
              <p>{contact[1].phone}</p>
            </div>
            <motion.div
              className="navbar-logo-container"
              variants={navbarVariants}
              initial="enter"
              animate="showing"
              exit="exit"
              transition={{ delay: 0.2, opacity: { duration: 1 } }}
              style={{ cursor: "pointer" }}
              onClick={() => refreshPage()}
            >
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
                className="navbar-logo-image"
                src={oneantlerLogoWhite}
                alt="white oneantler logo"
              />
              <motion.p className="navbar-name">OneAntler</motion.p>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </AnimatePresence>
  );
}
