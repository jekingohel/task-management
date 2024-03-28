import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    id: null,
    first_name: null,
    last_name: null,
    full_name: null,
    email: null,
    has_password: true,
    is_linked_to_google: false,
    is_linked_to_facebook: false,
    email_verified: false
    // "is_linked_to_apple": false
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
