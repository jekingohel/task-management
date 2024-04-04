const FavoriteProjects = require('../../models/favoriteProjects')
const { handleError, isIDGood } = require('../../middleware/utils')
const { createItem } = require('../../middleware/db')
const { matchedData } = require('express-validator')
const { FavoritesExists } = require('./helpers')

/**
 * Get FavoriteProjects function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const favoriteProjects = async (req, res) => {
  try {
    const userId = await isIDGood(req.user._id)
    const project = await isIDGood(req.body.project)
    const validatedData = matchedData(req)
    validatedData.user = userId
    validatedData.project = project
    console.log('validatedData', validatedData)

    const doesExists = await FavoritesExists(userId, project)
    if (!doesExists) {
      res.status(201).json(await createItem(validatedData, FavoriteProjects))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { favoriteProjects }
