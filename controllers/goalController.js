const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");

/**
 * @desc               Get goals
 * @route              GET /api/goals
 * @access           Privite
 */
const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find({ user: req.user });

  res.status(200).send(goal);
});

/**
 * @desc              Set goals
 * @route              POST /api/goals
 * @access           Privite
 */
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("no text");
  }

  const newGoal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });

  res.status(200).json(newGoal);
});

/**
 * @desc               Update goals
 * @route              PUT /api/goals/:id
 * @access           Privite
 */
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateGoal);
});

/**
 * @desc               Delete goals
 * @route              DELETE /api/goals/:id
 * @access           Privite
 */
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Goal.deleteOne(goal);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
