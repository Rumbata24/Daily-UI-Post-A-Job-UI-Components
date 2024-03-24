import { useState } from "react";
import "../../components/viewComponent/viewComponent.css";

const ViewComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section className="view-wrapper">
      <div className="top-view">
        <h1>View</h1>
      </div>
      <div className="bottom-view">
        <div className="checkboxAndText">
          <div className="left-check">
            <label className="checkbox">
              <input
                type="checkbox"
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <span
                className={`checkmark ${isChecked ? "checkmark--active" : ""}`}
                // This element is purely decorative so
                // we hide it for screen readers
                aria-hidden="true"
              />
            </label>

            <p>All job posts</p>
          </div>
          <p className="number">16</p>
        </div>
        <div className="checkbox-text">
          <div className="checkboxAndText">
            <div className="left-check">
              <label className="checkbox">
                <input
                  type="checkbox"
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <span
                  className={`checkmark ${
                    isChecked ? "checkmark--active" : ""
                  }`}
                  // This element is purely decorative so
                  // we hide it for screen readers
                  aria-hidden="true"
                />
              </label>
              <p>Active job posts</p>
            </div>
            <p className="number">5</p>
          </div>
        </div>
        <div className="checkbox-text">
          <div className="checkboxAndText">
            <div className="left-check">
              <label className="checkbox">
                <input
                  type="checkbox"
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <span
                  className={`checkmark ${
                    isChecked ? "checkmark--active" : ""
                  }`}
                  // This element is purely decorative so
                  // we hide it for screen readers
                  aria-hidden="true"
                />
              </label>
              <p>Archived job posts</p>
            </div>
            <p className="number">0</p>
          </div>
        </div>
      </div>
      <div className="bottom-view"></div>
    </section>
  );
};

export default ViewComponent;
