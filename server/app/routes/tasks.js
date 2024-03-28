const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
} = require('../controllers/tasks')

const {
  validateCreateTask,
  validateGetTask,
  validateUpdateTask,
  validateDeleteTask
} = require('../controllers/tasks/validators')

/*
 * Task routes
 */

/*
 * Get all Tasks route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getTasks
)

/*
 * Create new task route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateCreateTask,
  createTask
)

/*
 * Get task route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateGetTask,
  getTask
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateUpdateTask,
  updateTask
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateDeleteTask,
  deleteTask
)

module.exports = router
