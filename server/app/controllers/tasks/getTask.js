const Task = require('../../models/task')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getTask = async (req, res) => {
  try {
    const validatedData = matchedData(req)
    const id = await isIDGood(validatedData.id)
    const userId = await isIDGood(req.user._id)
    const task = await Task.findOne({ _id: id, user: userId })
    res.status(200).json(task)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getTask }
