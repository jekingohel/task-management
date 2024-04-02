const Project = require('../../../models/project')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a Project already exists in database
 * @param {string} title - title of Project
 */
const projectExists = (title = '', id = '') => {
  return new Promise((resolve, reject) => {
    Project.findOne(
      {
        title,
        user: id
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'PROJECT_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { projectExists }
