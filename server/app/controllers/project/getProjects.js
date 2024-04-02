const Project = require('../../models/project')
const { handleError, isIDGood } = require('../../middleware/utils')
const { checkQueryString } = require('../../middleware/db')
const { getAllItemsFromDB } = require('./helpers/getAllItemsFromDB')

/**
 * Get project function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getProjects = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id)
    const query = await checkQueryString(req.query)
    query.user = id
    res.status(200).json(await getAllItemsFromDB(req, Project, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getProjects }
