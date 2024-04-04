import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    active: null,
    opened: true
  }
}

const MainMenu = StoreTemplate(defaultState(), container)

container[actionType.ACTION_MAIN_MENU_GLOBAL_RESET] = function (state) {
  return defaultState()
}

container[actionType.ACTION_MAIN_MENU_ACTIVE_SECTION] = function (state, payload) {
  return {
    ...state,
    active: payload.value
  }
}

container[actionType.ACTION_MAIN_MENU_TOGGLE_OPENED] = function (state) {
  return {
    ...state,
    opened: !state.opened
  }
}

container[actionType.ACTION_MAIN_MENU_SET_OPENED] = function (state, payload) {
  return {
    ...state,
    opened: payload.value
  }
}

export default MainMenu
