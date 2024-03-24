import "../../components/sortComponents/sortComponents.css";
import arrowDown from "../../assets/arrowDown.png";
import { useEffect, useRef, useState } from "react";
const SortComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const candidatesDropdown = () => {
    setIsVisible(!isVisible);
  };

  const closeOnItemClick = () => {
    setIsVisible(false);
  };
  return (
    <section className="sort-wrapper">
      <p className="sort-text">Sort by:</p>
      <div ref={dropdownRef} className="candidates-wrapper-dropdown">
        <p className="drop" onClick={candidatesDropdown}>
          Newest candidates{" "}
          <img className="arrow-down" src={arrowDown} alt="" />
        </p>
        <div className={`dropdown-candidate ${isVisible ? "visible" : ""}`}>
          <p onClick={closeOnItemClick}>Date posted</p>
          <p onClick={closeOnItemClick}>Alphabetical</p>
          <p onClick={closeOnItemClick}>Newest candidate</p>
        </div>
      </div>
    </section>
  );
};

export default SortComponent;
