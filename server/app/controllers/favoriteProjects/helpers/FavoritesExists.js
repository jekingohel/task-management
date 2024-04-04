const FavoriteProjects = require('../../../models/favoriteProjects')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a Favorites already exists in database
 * @param {string} title - title of Project
 */
const FavoritesExists = (id = '', project = '') => {
  return new Promise((resolve, reject) => {
    FavoriteProjects.findOne(
      {
        user: id,
        project
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'ALREADY_FAVORITE'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { FavoritesExists }
