const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

const { changePasswordInDB } = require('./helpers')

/**
 * Change password function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const changePassword = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id)
    req = matchedData(req)
    res.status(200).json(await changePasswordInDB(id, req))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { changePassword }
