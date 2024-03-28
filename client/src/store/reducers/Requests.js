import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const readyState = function () {
  return {
    func: null,
    params: null
  }
}

const defaultState = function () {
  return {
    func: "Init",
    params: null
  }
}

const Requests = StoreTemplate(defaultState(), container)

container[actionType.ACTION_REQUESTS_SET_ACTION] = function (state, payload) {
  return {
    ...state,
    func: payload.func,
    params: payload.params
  }
}

container[actionType.ACTION_REQUESTS_SET_REQUEST] = function (state, payload) {
  return {
    ...state,
    func: payload.func
  }
}

container[actionType.ACTION_REQUESTS_SET_PARAMS] = function (state, payload) {
  return {
    ...state,
    params: payload.params
  }
}

container[actionType.ACTION_REQUESTS_READY] = function (state, payload) {
  return readyState()
}

container[actionType.ACTION_REQUESTS_GLOBAL_RESET] = function (state, payload) {
  return defaultState()
}

export default Requests
