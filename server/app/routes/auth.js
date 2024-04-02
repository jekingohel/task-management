const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const {
  register,
  verify,
  forgotPassword,
  resetPassword,
  getRefreshToken,
  login,
  roleAuthorization,
  me,
  verifyForgotPasswordToken
} = require('../controllers/auth')

const {
  validateRegister,
  validateVerify,
  validateForgotPassword,
  validateForgotPasswordToken,
  validateResetPassword,
  validateLogin
} = require('../controllers/auth/validators')

/*
 * Auth routes
 */

/*
 * Register route
 */
router.post('/register', trimRequest.all, validateRegister, register)

/*
 * Verify route
 */
router.post('/verify', trimRequest.all, validateVerify, verify)

/*
 * Forgot password route
 */
router.post(
  '/password-resets',
  trimRequest.all,
  validateForgotPassword,
  forgotPassword
)

/*
 * Verify Forgot password token route
 */
router.get(
  '/password-resets/:token',
  trimRequest.all,
  validateForgotPasswordToken,
  verifyForgotPasswordToken
)

/*
 * Reset password route
 */
router.post('/reset', trimRequest.all, validateResetPassword, resetPassword)

/*
 * Get new refresh token
 */
router.get(
  '/token',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getRefreshToken
)

/*
 * Login route
 */
router.post('/login', trimRequest.all, validateLogin, login)

/*
 * Get logged-in user details
 */
router.get(
  '/me',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  me
)

module.exports = router
