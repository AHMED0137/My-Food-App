var express = require("express"),
  router = express.Router();
const mongos = require("mongoose");
const FoodSchema = require("../modal/modal");

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongos.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such student" });
  }
  const food = await FoodSchema.findByIdAndDelete(id);
  if (!food) {
    return res.status(404).json({ error: "No such food available" });
  }
  res.status(200).json({ Success: " food data deleted" });
});

module.exports = router;
