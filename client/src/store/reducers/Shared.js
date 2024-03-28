import * as actionType from "store/actions/actionTypes"

const defaultModals = function () {
  return {
    error_message: {
      opened: false,
      message: "",
      callback: null
    },
    confirm_action: {
      opened: false,
      message: "",
      ngn: null
    }
  }
}

const defaultState = function () {
  return {
    modals: defaultModals()
  }
}

const Shared = function (state = defaultState(), action) {
  switch (action.type) {
    //
    // Modals
    //
    case actionType.ACTION_SHARED_MODALS_ERROR_MESSAGE_SHOW:
      return modalsErrorMessageShow(state, action.payload)
    case actionType.ACTION_SHARED_MODALS_ERROR_MESSAGE_HIDE:
      return modalsErrorMessageHide(state)

    case actionType.ACTION_SHARED_MODALS_CONFIRM_CONTENT_ACTION_SHOW:
      return modalsConfirmContentActionShow(state, action.payload)
    case actionType.ACTION_SHARED_MODALS_CONFIRM_CONTENT_ACTION_HIDE:
      return modalsConfirmContentActionHide(state)

    //
    // Other
    case actionType.ACTION_SHARED_GLOBAL_RESET:
      return globalReset()

    default:
      return state
  }
}

const globalReset = () => {
  return defaultState()
}

const modalsErrorMessageShow = (state, payload) => {
  state.modals.error_message = {
    opened: true,
    message: payload.message,
    callback: payload.callback
  }
  return {
    ...state
  }
}

const modalsErrorMessageHide = (state) => {
  state.modals = defaultModals()
  return {
    ...state
  }
}

const modalsConfirmContentActionShow = (state, payload) => {
  state.modals.confirm_action = {
    opened: true,
    message: payload.message,
    ngn: payload.ngn
  }
  return {
    ...state
  }
}

const modalsConfirmContentActionHide = (state) => {
  state.modals = defaultModals()
  return {
    ...state
  }
}

export default Shared
