import "../css/Cards.css";
import CardOpenClose from "./CardOpenClose";
import { data, shuffleData } from "../utilities/data.js";
import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";

import DropdownCat from "./User/CategorySelect";

function CardContainer() {
  const { category } = useContext(DropdownCat);

  function filterData() {
    const catos = data.filter((stuff) => {
      return stuff.category === category;
    });
    return catos;
  }

  const [items, setItems] = useState(filterData);
  //const [countCards, setCountCards] = useState(12);
  const countCards = 12;

  const randomDataAll = shuffleData(data, data.length);
  const cardData = randomDataAll.slice(0, countCards);

  /*
  const countingCards = (event) => {
    event.preventDefault();
    setCountCards(countCards + 2);
  };
*/
  useEffect(() => {
    if (category === "reset") {
      setItems(cardData);
    } else if (category === "all") {
      setItems(randomDataAll);
    } else {
      setItems(filterData);
    }
  }, [category]);

  return (
    <div className="grid-container">
      <motion.div
        className="card-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {items.map((item) => (
          <CardOpenClose data={item} key={item.id} />
        ))}
      </motion.div>
    </div>
  );
}

export default CardContainer;
