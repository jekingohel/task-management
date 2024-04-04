const FavoriteProjects = require('../../models/favoriteProjects')
const { handleError, isIDGood } = require('../../middleware/utils')
const { checkQueryString } = require('../../middleware/db')
const { getAllItemsFromDB } = require('./helpers/getAllItemsFromDB')

/**
 * Get FavoriteProjects function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getFavoriteProjects = async (req, res) => {
  try {
    console.log('query')
    const id = await isIDGood(req.user._id)
    const query = await checkQueryString(req.query)
    query.user = id
    console.log(query)
    res.status(200).json(await getAllItemsFromDB(req, FavoriteProjects, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getFavoriteProjects }
