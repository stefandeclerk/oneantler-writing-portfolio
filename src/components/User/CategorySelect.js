import { createContext } from "react";

const CategoryContext = createContext({
  category: "",
  setCategory: (newCat) => {},
});

export default CategoryContext;
