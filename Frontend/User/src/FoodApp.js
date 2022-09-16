import React from "react";
import FoodCard from "./components/card/FoodCard";
import TabPanel from "./components/navigation/TabPanel";
import CartDrawer from "./components/Cart/Cart";
function FoodApp() {
  const [foodMenu, setFoodMenu] = React.useState();
  const [searchFood, setsearchFood] = React.useState();
  const [cartData, setCartData] = React.useState([]);
  const [allData, setAllData] = React.useState([]);
  // console.log(cart.foodName);
  // fetching data from API
  React.useEffect(() => {
    fetch("/getFood").then((result) => {
      result.json().then((resp) => {
        setAllData(resp);
      });
    });
  }, []);

  return (
    <>
      <CartDrawer cartData={cartData} />
      <TabPanel
        setFoodMenu={setFoodMenu}
        setsearchFood={setsearchFood}
        allData={allData}
      />
      <FoodCard
        foodMenu={foodMenu}
        searchFood={searchFood}
        allData={allData}
        setCartData={setCartData}
      />
    </>
  );
}

export default FoodApp;
