import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    collection: [],
    selected: null
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

container[actionType.ACTION_TASKS_SET_SELECTED] = function (state, payload) {
  return {
    ...state,
    selected: payload.data
  }
}

container[actionType.ACTION_TASKS_ADD_ITEM] = function (state, payload) {
  return {
    ...state,
    collection: [payload.data, ...state.collection]
  }
}

container[actionType.ACTION_TASKS_UPDATE_ITEM] = function (state, payload) {
  function findItems(x) {
    if (x._id === payload?.data?._id) {
      return payload.data
    }
    return x
  }

  state.collection = state.collection?.map(findItems)
  state?.selected?._id === payload?.data?._id &&
    (state.selected = payload?.data)
  return {
    ...state
  }
}

container[actionType.ACTION_TASKS_DELETE_ITEM] = function (state, payload) {
  function findItems(x) {
    return x._id !== payload?.data?._id
  }
  state.collection = state.collection?.filter(findItems)
  state?.selected?._id === payload?.data?._id && (state.selected = null)
  return {
    ...state
  }
}

export default Tasks
