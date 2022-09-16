import React from "react";
import "./tabpanel.css";
import appLogo from "./MyFoodApp.png";
import ColorTextFields from "./FullWidthTextField";

const TabPanel = ({ setFoodMenu, setsearchFood, allData }) => {
  const uniqueCategory = [
    ...new Set(
      allData.map((value) => {
        return value.category;
      })
    ),
  ];
  const newUnique = uniqueCategory.sort((a, b) => a.localeCompare(b));
  const filterdata = (category) => {
    setFoodMenu(category);
  };
  return (
    <>
      <div className="app_logo">
        <img src={appLogo} alt="my app logo" className="logo" />
        <div>
          <ColorTextFields
            className="text_field"
            setsearchFood={setsearchFood}
          />
        </div>
      </div>
      <nav className="navbar">
        <div className="btn-group">
          {newUnique.map((value) => {
            return (
              <button
                className="btn-group__item"
                value="breakfast"
                onClick={(e) => filterdata(value)}
              >
                {value}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default TabPanel;
