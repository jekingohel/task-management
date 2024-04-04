const mongoose = require('mongoose')

const FavoriteProjectsSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Types.ObjectId,
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

module.exports = mongoose.model('FavoriteProjects', FavoriteProjectsSchema)
