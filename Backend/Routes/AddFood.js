var express = require("express"),
  router = express.Router();
const FoodSchema = require("../modal/modal");

// add data to database
router.post("/", async (req, res) => {
  const {
    foodName,
    category,
    ingredients,
    calories,
    price,
    description,
    image,
  } = req.body;
  try {
    const foodApp = await FoodSchema.create({
      foodName,
      category,
      ingredients,
      calories,
      price,
      description,
      image,
    });
    res.status(200).json(foodApp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
