import "./App.css";
import Bio from "./components/Bio";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import DropdownCat from "./components/User/CategorySelect";
import { useState } from "react";
import CardContainer from "./components/CardContainer";
import FeatureCardSlider from "./components/FeatureSlider";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("reset");

  return (
    <>
      <Home />
      <DropdownCat.Provider value={{ category, setCategory }}>
        <div className="navbar-container">
          <Navbar />
        </div>
        <FeatureCardSlider />
        <CardContainer />
      </DropdownCat.Provider>
      <Bio />
      <Footer />
    </>
  );
}

export default App;
