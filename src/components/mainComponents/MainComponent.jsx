import "../../components/mainComponents/mainComponents.css";
import bigT from "../../assets/T.png";
import location from "../../assets/location.png";
import view from "../../assets/eye.png";
import download from "../../assets/download.png";
import apply from "../../assets/apply.png";
import more from "../../assets/more.png";
import { useState, useEffect, useRef } from "react";

const JobComponent = () => {
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

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleDropdownItemClick = () => {
    setIsVisible(false);
  };
  return (
    <main className="main">
      <div className="top">
        <div className="wrapper">
          <div className="logo-container">
            <img className="logo" src={bigT} alt="big T" />
          </div>
          <div className="top-text">
            <h1>The Mars</h1>
            <p>
              <img src={location} alt="" /> Anywhere
            </p>
          </div>
        </div>
        <div ref={dropdownRef} className="wrapper-more">
          <div onClick={toggleDropdown}>
            <img className="more" src={more} alt="" />
          </div>
          <div className={`dropdown ${isVisible ? "toggle" : ""}`}>
            <p onClick={handleDropdownItemClick}>
              <img src={view} alt="" /> View
            </p>
            <p onClick={handleDropdownItemClick}>
              <img src={download} alt="" /> Save
            </p>
            <p onClick={handleDropdownItemClick}>
              <img src={apply} alt="" /> Apply
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h3>Web designer</h3>
        <p>Help us redefine our brand identity and digital strategy!</p>
        <p className="time">Full time</p>
      </div>
    </main>
  );
};

export default JobComponent;
