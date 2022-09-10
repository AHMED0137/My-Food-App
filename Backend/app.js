const express = require("express");
const mongos = require("mongoose");
const app = express();
require("dotenv").config();
app.use(express.json());
const getFoodRouter = require("./Routes/GetAll");
const addFood = require("./Routes/AddFood");
const deleteFoodDetail = require("./Routes/DeleteFood");
const updateFoodDetail = require("./Routes/UpdateFood");
// database connection
mongos
  .connect(process.env.MONGOS_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("database connected to port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
// Get all food detail
app.use("/get", getFoodRouter);
// Add detail
app.use("/add", addFood);
// // delete single data
app.use("/delete", deleteFoodDetail);
//  Update single data
app.use("/update", updateFoodDetail);
