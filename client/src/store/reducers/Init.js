import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    done: false
  }
}

const Init = StoreTemplate(defaultState(), container)

container[actionType.ACTION_INIT_SET_DONE] = function (state) {
  return {
    ...state,
    done: true
  }
}

export default Init
