const Project = require('../../models/project')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getProject = async (req, res) => {
  try {
    const validatedData = matchedData(req)
    const id = await isIDGood(validatedData.id)
    const userId = await isIDGood(req.user._id)
    const project = await Project.findOne({ _id: id, user: userId })
    res.status(200).json(project)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getProject }
