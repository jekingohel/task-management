import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"
import DefaultToTrue from "store/defaults/DefaultToTrue"
import DefaultToFalse from "store/defaults/DefaultToFalse"

const container = {}

const defaultState = function () {
  return {
    //required: DefaultToFalse(),
    required: true,
    step: 1,
    inActiveWS: DefaultToFalse()
  }
}

const CreateWorkspace = StoreTemplate(defaultState(), container)

container[actionType.ACTION_CREATE_WORKSPACE_GLOBAL_RESET] = function (state) {
  return defaultState()
}

container[actionType.ACTION_CREATE_WORKSPACE_SET_REQUIRED] = function (state) {
  return {
    ...state,
    required: DefaultToTrue()
  }
}

container[actionType.ACTION_CREATE_WORKSPACE_SET_NOT_REQUIRED] = function (
  state
) {
  return {
    ...state,
    required: DefaultToFalse()
  }
}

container[actionType.ACTION_SET_WORKSPACE_STEP] = function (state, payload) {
  state.step = payload
  return {
    ...state
  }
}

container[actionType.ACTION_CREATE_WORKSPACE_SET_INACTIVE] = function (state) {
  return {
    ...state,
    inActiveWS: DefaultToTrue()
  }
}

container[actionType.ACTION_CREATE_WORKSPACE_SET_NOT_INACTIVE] = function (
  state
) {
  return {
    ...state,
    inActiveWS: DefaultToFalse()
  }
}

export default CreateWorkspace
