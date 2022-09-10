var express = require("express"),
  router = express.Router();
const mongos = require("mongoose");
const FoodSchema = require("../modal/modal");

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const foodName = req.body.foodName;
  const category = req.body.category;
  const ingredients = req.body.ingredients;
  const calories = req.body.calories;
  const price = req.body.price;
  const description = req.body.description;
  const image = req.body.image;

  if (!mongos.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such student" });
  }
  const food = await FoodSchema.findByIdAndUpdate(id, {
    $set: {
      foodName: foodName,
      category: category,
      ingredients: ingredients,
      calories: calories,
      price: price,
      description: description,
      image: image,
    },
  });
  if (!food) {
    return res.status(404).json({ error: "No such food available" });
  }
  res.status(200).json({ Success: " food detail Updated" });
});

module.exports = router;
