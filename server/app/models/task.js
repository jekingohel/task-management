const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TasksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['todo', 'in-progress', 'done'],
      default: 'todo'
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'users',
      required: true
    },
    order: {
      type: Number,
      required: false,
      default: 0
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

// Pre-save hook to calculate the order number
TasksSchema.pre('save', async function (next) {
  try {
    if (!this.isNew) {
      // Skip updating the order if the document is not new
      return next()
    }
    const Task = mongoose.model('Task', TasksSchema)
    const latestTask = await Task.findOne({}, {}, { sort: { order: -1 } }) // Find the latest task
    if (latestTask) {
      this.order = latestTask.order + 1 // Increment the order number by one
    } else {
      this.order = 1 // If there are no tasks yet, set order to 1
    }
    return next()
  } catch (error) {
    return next(error)
  }
})

TasksSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Task', TasksSchema)
