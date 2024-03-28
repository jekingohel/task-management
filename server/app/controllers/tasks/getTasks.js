const Task = require('../../models/task')
const { handleError, isIDGood } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')
/**
 * Get task function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getTasks = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id)
    const query = await checkQueryString(req.query)
    query.user = id
    res.status(200).json(await getItems(req, Task, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getTasks }
