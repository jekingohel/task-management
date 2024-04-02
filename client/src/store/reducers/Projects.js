import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    collection: [],
    favorites: [],
    selected: null
  }
}

const Projects = StoreTemplate(defaultState(), container)

container[actionType.ACTION_PROJECTS_GLOBAL_RESET] = function (state) {
  return defaultState()
}

container[actionType.ACTION_PROJECTS_SET_COLLECTION] = function (
  state,
  payload
) {
  return {
    ...state,
    collection: payload.data
  }
}

container[actionType.ACTION_PROJECTS_SET_FAVORITES] = function (
  state,
  payload
) {
  return {
    ...state,
    favorites: payload.data
  }
}

container[actionType.ACTION_PROJECTS_SET_SELECTED] = function (
  state,
  payload
) {
  return {
    ...state,
    selected: payload.data
  }
}

container[actionType.ACTION_PROJECTS_ADD_ITEM] = function (state, payload) {
  return {
    ...state,
    collection: [...state.collection, payload.data]
  }
}

export default Projects
