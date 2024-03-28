const { validateCreateTask } = require('./validateCreateTask')
const { validateDeleteTask } = require('./validateDeleteTask')
const { validateGetTask } = require('./validateGetTask')
const { validateUpdateTask } = require('./validateUpdateTask')

module.exports = {
  validateCreateTask,
  validateDeleteTask,
  validateGetTask,
  validateUpdateTask
}
