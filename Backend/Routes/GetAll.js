var express = require("express"),
  router = express.Router();
const FoodSchema = require("../modal/modal");

router.get("/", async (req, res) => {
  const alldata = await FoodSchema.find({}).sort({ createdAt: -1 });
  res.status(200).json(alldata);
});

module.exports = router;
