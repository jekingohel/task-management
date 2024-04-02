const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'users',
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Project', ProjectSchema)
