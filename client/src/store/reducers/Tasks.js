import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    collection: []
  }
}

const Tasks = StoreTemplate(defaultState(), container)

container[actionType.ACTION_TASKS_GLOBAL_RESET] = function (state) {
  return defaultState()
}

container[actionType.ACTION_TASKS_SET_COLLECTION] = function (state, payload) {
  return {
    ...state,
    collection: payload.data
  }
}

export default Tasks
