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
  getFavoriteProjects,
  favoriteProjects,
  unfavoriteProjects
} = require('../controllers/favoriteProjects')

const {
  validateFavoriteProject
} = require('../controllers/favoriteProjects/validators')

/*
 * favorite projects routes
 */

/*
 * favorites list route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getFavoriteProjects
)

/*
 * favorite project route
 */
router.post(
  '/favorite',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateFavoriteProject,
  favoriteProjects
)

/*
 *  unfavorite project route
 */
router.post(
  '/unfavorite',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateFavoriteProject,
  unfavoriteProjects
)

module.exports = router
