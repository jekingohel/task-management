const Task = require('../../models/task')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { updateItem } = require('../../middleware/db')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateTask = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const oldTask = await Task.findOne({ _id: id })
    const oldPosition = oldTask.order
    const newPosition = Number(req.order)
    const userId = oldTask.user
    if (oldPosition !== newPosition) {
      // Update the order of the dragged task
      oldTask.order = newPosition
      await oldTask.save()

      if (oldPosition > newPosition) {
        // Update order from newPos to oldPos
        const tasksToUpdateLower = await Task.find({
          _id: { $ne: id }, // Exclude the dragged task
          user: userId,
          order: { $lte: oldPosition, $gte: newPosition }
        })

        let order = newPosition + 1
        for (const task of tasksToUpdateLower) {
          task.order = order
          await task.save()
          order++
        }
      } else if (oldPosition < newPosition) {
        const tasksToUpdateUpper = await Task.find({
          _id: { $ne: id }, // Exclude the dragged task
          user: userId,
          order: { $lte: Number(req.order) } // Tasks to update
        })
        let order = 1
        for (const task of tasksToUpdateUpper) {
          task.order = order
          await task.save()
          order++
        }
      }
    }
    res.status(200).json(await updateItem(id, Task, req))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateTask }
