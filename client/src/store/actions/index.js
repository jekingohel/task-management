import * as actionType from "store/actions/actionTypes"

// --------------------------------------------------------------------------------
// Current User
// --------------------------------------------------------------------------------

export const UserSetData = (data) => {
  return {
    type: actionType.ACTION_USER_SET_DATA,
    payload: {
      data
    }
  }
}

export const UserGlobalReset = () => {
  return {
    type: actionType.ACTION_USER_GLOBAL_RESET
  }
}

// --------------------------------------------------------------------------------
// Auth
// --------------------------------------------------------------------------------

export const AuthSetSigned = () => {
  return {
    type: actionType.ACTION_AUTH_SET_SIGNED
  }
}

export const AuthSetNotSigned = () => {
  return {
    type: actionType.ACTION_AUTH_SET_NOT_SIGNED
  }
}

export const AuthReset = () => {
  return {
    type: actionType.ACTION_AUTH_RESET
  }
}

// --------------------------------------------------------------------------------
// Requests
// --------------------------------------------------------------------------------

export const RequestsReady = () => {
  return {
    type: actionType.ACTION_REQUESTS_READY
  }
}

export const RequestsGlobalReset = () => {
  return {
    type: actionType.ACTION_REQUESTS_GLOBAL_RESET
  }
}

export const RequestsSetParams = (value) => {
  return {
    type: actionType.ACTION_REQUESTS_SET_PARAMS,
    payload: {
      params: value
    }
  }
}

export const RequestsSetLoader = (value) => {
  return {
    type: actionType.ACTION_REQUESTS_SET_REQUEST,
    payload: {
      func: value
    }
  }
}

export const RequestsSetAction = (func, params) => {
  return {
    type: actionType.ACTION_REQUESTS_SET_ACTION,
    payload: {
      func: func,
      params: params
    }
  }
}

// --------------------------------------------------------------------------------
// Init
// --------------------------------------------------------------------------------

export const InitSetDone = () => {
  return {
    type: actionType.ACTION_INIT_SET_DONE
  }
}

// --------------------------------------------------------------------------------
// Shared
// --------------------------------------------------------------------------------

export const SharedModalErrorMessageShow = function (message, callback) {
  return {
    type: actionType.ACTION_SHARED_MODALS_ERROR_MESSAGE_SHOW,
    payload: {
      message: message,
      callback: callback
    }
  }
}

export const SharedModalErrorMessageHide = function () {
  return {
    type: actionType.ACTION_SHARED_MODALS_ERROR_MESSAGE_HIDE
  }
}

export const SharedModalConfirmContentActionShow = function (message, ngn) {
  return {
    type: actionType.ACTION_SHARED_MODALS_CONFIRM_CONTENT_ACTION_SHOW,
    payload: {
      message: message,
      ngn: ngn
    }
  }
}

export const SharedModalConfirmContentActionHide = function () {
  return {
    type: actionType.ACTION_SHARED_MODALS_CONFIRM_CONTENT_ACTION_HIDE
  }
}

export const SharedGlobalReset = function (items) {
  return {
    type: actionType.ACTION_SHARED_GLOBAL_RESET
  }
}

// ----------------------------------------------------------------------------------------------------
// Tasks
// ----------------------------------------------------------------------------------------------------

export const TasksAddTask = (task) => {
  return {
    type: actionType.ACTION_TASKS_ADD_TASK,
    payload: {
      task: task
    }
  }
}

export const TasksUpdateTask = (task) => {
  return {
    type: actionType.ACTION_TASKS_UPDATE_TASK,
    payload: {
      task: task
    }
  }
}

export const TasksRemoveTask = (id) => {
  return {
    type: actionType.ACTION_TASKS_REMOVE_TASK,
    payload: {
      id: id
    }
  }
}

export const TasksSetCollection = (collection) => {
  return {
    type: actionType.ACTION_TASKS_SET_COLLECTION,
    payload: {
      collection: collection
    }
  }
}

export const TasksGlobalReset = () => {
  return {
    type: actionType.ACTION_TASKS_GLOBAL_RESET
  }
}
