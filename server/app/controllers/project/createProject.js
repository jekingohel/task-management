const Project = require('../../models/project')
const { createItem } = require('../../middleware/db')
const { handleError, isIDGood } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { projectExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createProject = async (req, res) => {
  try {
    const userId = await isIDGood(req.user._id)
    const validatedData = matchedData(req)
    validatedData.user = userId
    const doesProjectExists = await projectExists(req.title, userId)
    if (!doesProjectExists) {
      res.status(201).json(await createItem(validatedData, Project))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createProject }
