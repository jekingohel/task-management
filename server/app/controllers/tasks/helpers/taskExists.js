const Task = require('../../../models/task')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a task already exists in database
 * @param {string} title - title of task
 */
const taskExists = (title = '', id = '') => {
  return new Promise((resolve, reject) => {
    Task.findOne(
      {
        title,
        user: id
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'TASK_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { taskExists }
