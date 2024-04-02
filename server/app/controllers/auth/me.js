const User = require('../../models/user')
const { isIDGood, handleError } = require('../../middleware/utils')
const { getItem } = require('../../middleware/db')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const me = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id)
    res.status(200).json(await getItem(id, User))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { me }
