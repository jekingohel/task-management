const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates update item request
 */
const validateFavoriteProject = [
  check('project')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('user')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateFavoriteProject }
