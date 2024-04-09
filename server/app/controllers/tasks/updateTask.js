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
    const userId = await isIDGood(oldTask.user)
    if (oldTask.order !== Number(req.order)) {
      // Update the order of the dragged task
      oldTask.order = Number(req.order)
      await oldTask.save()

      // Find tasks with order greater than the dragged task's original order
      // and less than or equal to the new order
      const tasksToUpdate = await Task.find({
        _id: { $ne: id }, // Exclude the dragged task
        user: userId
        //order: { $gte: Number(req.order) } // Tasks to update
      })

      // Increment the order of these tasks by one
      let plusOrder = Number(req.order) + 1
      let minusOrder = Number(req.order) - 1
      for (const task of tasksToUpdate) {
        if (task.order > Number(req.order)) {
          task.order = plusOrder
        } else if (task.order < Number(req.order)) {
          task.order = minusOrder
        }
        await task.save()
        plusOrder++
        minusOrder--
      }
    }
    res.status(200).json(await updateItem(id, Task, req))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateTask }
