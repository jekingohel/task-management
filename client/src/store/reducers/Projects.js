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

container[actionType.ACTION_PROJECTS_SET_SELECTED] = function (state, payload) {
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

container[actionType.ACTION_PROJECTS_UPDATE_ITEM] = function (state, payload) {
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

container[actionType.ACTION_PROJECTS_DELETE_ITEM] = function (state, payload) {
  function findItems(x) {
    return x._id !== payload?.data?._id
  }
  state.collection = state.collection?.filter(findItems)
  state?.selected?._id === payload?.data?._id && (state.selected = null)
  return {
    ...state
  }
}

export default Projects
