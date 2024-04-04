const Task = require('../../models/task')
const { createItem } = require('../../middleware/db')
const { handleError, isIDGood } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { taskExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createTask = async (req, res) => {
  try {
    const userId = await isIDGood(req.user._id)
    const project = await isIDGood(req.body.project)
    const validatedData = matchedData(req)
    validatedData.user = userId
    validatedData.project = project

    const doesTaskExists = await taskExists(req.body.title, userId, project)
    if (!doesTaskExists) {
      res.status(201).json(await createItem(validatedData, Task))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createTask }
