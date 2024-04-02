import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    _id: null,
    name: null,
    email: null,
    verification: null,
    city: null,
    phone: null,
    urlTwitter: null,
    urlGitHub: null,
    createdAt: null,
    updatedAt: null,
    role: null,
    verified: false
  }
}

const User = StoreTemplate(defaultState(), container)

container[actionType.ACTION_USER_GLOBAL_RESET] = function (state) {
  return defaultState()
}

container[actionType.ACTION_USER_SET_DATA] = function (state, payload) {
  return {
    ...state,
    ...payload.data
  }
}

export default User
