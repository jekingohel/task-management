const ForgotPassword = require('../../models/forgotPassword')
const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const verifyForgotPasswordToken = async (req, res) => {
  try {
    const validatedData = matchedData(req)
    const token = await ForgotPassword.findOne({
      verification: validatedData.token,
      used: false
    })
    if (token) {
      const user = await User.findOne({
        email: token.email
      })
      res.status(200).json(user)
    } else {
      res.status(400).json({ error: 'TOKEN_INVALID' })
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { verifyForgotPasswordToken }
