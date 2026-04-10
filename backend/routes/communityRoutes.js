// routes/communityRoutes.js
const express = require("express");
const Community = require("../models/Community");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  const communities = await Community.find();
  res.json(communities);
});

// CREATE
router.post("/", auth, async (req, res) => {
  const community = new Community({
    name: req.body.name,
    createdBy: req.user,
  });

  await community.save();
  res.json(community);
});

module.exports = router;