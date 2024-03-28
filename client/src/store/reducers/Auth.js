import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    signed: false
  }
}

const Auth = StoreTemplate(defaultState(), container)

container[actionType.ACTION_AUTH_SET_NOT_SIGNED] = function (state) {
  return {
    ...state,
    signed: false
  }
}

container[actionType.ACTION_AUTH_SET_SIGNED] = function (state) {
  return {
    ...state,
    signed: true
  }
}

container[actionType.ACTION_AUTH_RESET] = function (state) {
  return defaultState()
}

export default Auth
