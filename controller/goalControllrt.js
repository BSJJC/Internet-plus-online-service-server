/**
 * @description   Get goals
 * @route              GET /api/goals
 * @access           Privite
 */
const getGoals = (req, res) => {
  res.status(200).json({ msg: "Get goals" });
};

/**
 * @description   Set goals
 * @route              POST /api/goals
 * @access           Privite
 */
const setGoals = (req, res) => {
  res.status(200).json({ msg: "Set goal" });
};

/**
 * @description   Update goals
 * @route              PUT /api/goals/:id
 * @access           Privite
 */
const updateGoal = (req, res) => {
  res.status(200).json({ msg: `Update goal ${req.params.id}` });
};

/**
 * @description   Delete goals
 * @route              DELETE /api/goals/:id
 * @access           Privite
 */
const deleteGoal = (req, res) => {
  res.status(200).json({ msg: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
