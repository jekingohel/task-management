const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates forgot password token request
 */
const validateForgotPasswordToken = [
  check('token')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateForgotPasswordToken }
