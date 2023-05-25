const express = require("express");
const router = express.Router();
const { Activity } = require("../models");

router.get("/activity", async (req, res) => {
  const activities = await Activity.findAll();
  res.json(activities);
});

// router.get("/activity/:id", async (req, res) => {
//   const activities = await Activity.findAll();
//   res.json(activities);
// });

router.post("/activity", async (req, res) => {
  console.log(req.body);
  try {
    const { title, details, completed, favorite } = req.body;
    const newActivity = await Activity.create({
      title,
      details,
      completed,
      favorite,
    });
    res.json({
      id: newActivity.id,
    });
  } catch (error) {
    console.error(error.message);
  }
});

router.delete("/activity/:id", async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const deltedActivity = await Activity.destroy({
      where: {
        id,
      },
    });
    res.json(deltedActivity);
  } catch (error) {
    console.error(error.message);
  }
});

router.post("/activity/:id", async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const { title, details, completed, favorite } = req.body;

    // Assuming Activity is a Sequelize model
    const updatedActivity = await Activity.update(
      { title, details, completed, favorite },
      { where: { id } }
    );

    res.json(updatedActivity);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
