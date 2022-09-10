const mongos = require("mongoose");
const Schema = mongos.Schema;
const FoodSchema = new Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    calories: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  }
  // { timestamps: true }
);
module.exports = mongos.model("foodApp", FoodSchema);
