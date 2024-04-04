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

// --------------------------------------------------------------------------------
// Create Workspace
// --------------------------------------------------------------------------------

export const CreateWorkspaceSetRequired = () => {
  return {
    type: actionType.ACTION_CREATE_WORKSPACE_SET_REQUIRED
  }
}

export const CreateWorkspaceSetNotRequired = () => {
  return {
    type: actionType.ACTION_CREATE_WORKSPACE_SET_NOT_REQUIRED
  }
}

export const CreateWorkspaceSetInactive = () => {
  return {
    type: actionType.ACTION_CREATE_WORKSPACE_SET_INACTIVE
  }
}

export const CreateWorkspaceSetNoInactive = () => {
  return {
    type: actionType.ACTION_CREATE_WORKSPACE_SET_NOT_INACTIVE
  }
}

export const CreateWorkspaceGlobalReset = () => {
  return {
    type: actionType.ACTION_CREATE_WORKSPACE_GLOBAL_RESET
  }
}

export const CreateWorkspaceSetStep = (step) => {
  return {
    type: actionType.ACTION_SET_WORKSPACE_STEP,
    payload: step
  }
}

// --------------------------------------------------------------------------------
// Workspace - Collection
// --------------------------------------------------------------------------------

export const WSUpdateWorkspace = (item) => {
  return {
    type: actionType.ACTION_WS_UPDATE_WORKSPACE,
    payload: {
      item: item
    }
  }
}

export const WSUpdateCollection = (item) => {
  return {
    type: actionType.ACTION_WS_UPDATE_COLLECTION,
    payload: {
      item: item
    }
  }
}

export const WSSetCollection = (collection) => {
  return {
    type: actionType.ACTION_WS_SET_COLLECTION,
    payload: {
      collection: collection
    }
  }
}

// --------------------------------------------------------------------------------
// Workspace - General
// --------------------------------------------------------------------------------

export const WSSetCurrentWorkspaceOwnerID = (id) => {
  return {
    type: actionType.ACTION_WS_SET_CURRENT_WORKSPACE_OWNER_ID,
    payload: {
      id: id
    }
  }
}

export const WSSetCurrentWorkspaceUserID = (id) => {
  return {
    type: actionType.ACTION_WS_SET_CURRENT_WORKSPACE_USER_ID,
    payload: {
      id: id
    }
  }
}

export const WSSetCurrentWorkspaceUserRole = (role) => {
  return {
    type: actionType.ACTION_WS_SET_CURRENT_WORKSPACE_USER_ROLE,
    payload: {
      role: role
    }
  }
}

export const WSSetCurrentWorkspaceID = (id) => {
  return {
    type: actionType.ACTION_WS_SET_CURRENT_WORKSPACE_ID,
    payload: {
      id: id
    }
  }
}

export const WSSetCurrentWorkspaceName = (name) => {
  return {
    type: actionType.ACTION_WS_SET_CURRENT_WORKSPACE_NAME,
    payload: {
      name: name
    }
  }
}

export const WSSetCurrentWorkspaceLogo = (logo) => {
  return {
    type: actionType.ACTION_WS_SET_CURRENT_WORKSPACE_LOGO,
    payload: {
      logo: logo
    }
  }
}

export const WSSetCurrentWorkspaceFavicon = (favicon) => {
  return {
    type: actionType.ACTION_WS_SET_CURRENT_WORKSPACE_FAVICON,
    payload: {
      favicon: favicon
    }
  }
}

export const WSSetCurrentWorkspaceTotalMembers = (total_members) => {
  return {
    type: actionType.ACTION_WS_SET_CURRENT_WORKSPACE_TOTAL_MEMBERS,
    payload: {
      total_members: total_members
    }
  }
}

export const WSGlobalReset = () => {
  return {
    type: actionType.ACTION_WS_GLOBAL_RESET
  }
}

// --------------------------------------------------------------------------------
// Main Menu
// --------------------------------------------------------------------------------

export const MainMenuActiveSection = (value) => {
  return {
    type: actionType.ACTION_MAIN_MENU_ACTIVE_SECTION,
    payload: {
      value: value
    }
  }
}

export const MainMenuToggleOpened = () => {
  return {
    type: actionType.ACTION_MAIN_MENU_TOGGLE_OPENED
  }
}

export const MainMenuSetOpened = (value) => {
  return {
    type: actionType.ACTION_MAIN_MENU_SET_OPENED,
    payload: {
      value: value
    }
  }
}

export const MainMenuGlobalReset = () => {
  return {
    type: actionType.ACTION_MAIN_MENU_GLOBAL_RESET
  }
}
