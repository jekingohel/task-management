import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    token: JSON.parse(localStorage.getItem("token")) || null,
    signed: !!localStorage.getItem("token")
  }
}

const Auth = StoreTemplate(defaultState(), container)

container[actionType.ACTION_AUTH_SET_NOT_SIGNED] = function (state) {
  return {
    ...state,
    signed: false,
    token: null
  }
}

container[actionType.ACTION_AUTH_SET_SIGNED] = function (state) {
  return {
    ...state,
    signed: true,
    token: JSON.parse(localStorage.getItem("token")) || null
  }
}

container[actionType.ACTION_AUTH_RESET] = function (state) {
  return defaultState()
}

export default Auth
