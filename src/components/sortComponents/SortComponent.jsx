import "../../components/sortComponents/sortComponents.css";
import arrowDown from "../../assets/arrowDown.png";
import { useState } from "react";
const SortComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const candidatesDropdown = () => {
    setIsVisible(!isVisible);
  };
  return (
    <section className="sort-wrapper">
      <p className="sort-text">Sort by:</p>
      <div className="candidates-wrapper-dropdown">
        <p className="drop" onClick={candidatesDropdown}>
          Newest candidates <img className="arrow-down" src={arrowDown} alt="" />
        </p>
        <div className={`dropdown-candidate ${isVisible ? "visible" : ""}`}>
          <p>Date posted</p>
          <p>Alphabetical</p>
          <p>Newest candidate</p>
        </div>
      </div>
    </section>
  );
};

export default SortComponent;
