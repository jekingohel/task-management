import * as actionType from "store/actions/actionTypes"

const defaultState = () => {
  return {
    currentWorkspaceOwnerID: null,
    currentWorkspaceUserID: null,
    currentWorkspaceUserRole: null,
    currentWorkspaceID: null,
    currentWorkspaceName: null,
    currentWorkspaceTotalMembers: null,
    collection: []
  }
}

const Workspace = (state = defaultState(), action) => {
  switch (action.type) {
    //
    // Collection
    //
    case actionType.ACTION_WS_UPDATE_WORKSPACE:
      return actionWSUpdateWorkspace(state, action.payload)
    case actionType.ACTION_WS_UPDATE_COLLECTION:
      return actionWSUpdateCollection(state, action.payload)
    case actionType.ACTION_WS_SET_COLLECTION:
      return actionWSSetCollection(state, action.payload)

    //
    // General
    //
    case actionType.ACTION_WS_SET_CURRENT_WORKSPACE_OWNER_ID:
      return actionWSSetCurrentWorkspaceOwnerID(state, action.payload)

    case actionType.ACTION_WS_SET_CURRENT_WORKSPACE_USER_ID:
      return actionWSSetCurrentWorkspaceUserID(state, action.payload)
    case actionType.ACTION_WS_SET_CURRENT_WORKSPACE_USER_ROLE:
      return actionWSSetCurrentWorkspaceUserRole(state, action.payload)
    case actionType.ACTION_WS_SET_CURRENT_WORKSPACE_ID:
      return actionWSSetCurrentWorkspaceID(state, action.payload)
    case actionType.ACTION_WS_SET_CURRENT_WORKSPACE_NAME:
      return actionWSSetCurrentWorkspaceName(state, action.payload)
    case actionType.ACTION_WS_SET_CURRENT_WORKSPACE_TOTAL_MEMBERS:
      return actionWSSetCurrentWorkspaceTotalMembers(state, action.payload)
    case actionType.ACTION_WS_GLOBAL_RESET:
      return actionWSGlobalReset()

    default:
      return state
  }
}

const actionWSSetCurrentWorkspaceTotalMembers = (state, payload) => {
  state.currentWorkspaceTotalMembers = payload.total_members
  return state
}

const actionWSUpdateWorkspace = (state, payload) => {
  // find the workspace
  let ws = null
  for (let index in state.collection) {
    if (`${state.collection[index].id}` === `${payload.item.id}`) {
      ws = state.collection[index]
    }
  }

  // update/append
  if (ws !== null) {
    for (let index in payload.item) {
      ws[index] = payload.item[index]
    }
    if (`${state.currentWorkspaceID}` === `${payload.item.id}`) {
      state.currentWorkspaceName = payload.item.name
    }
  } else {
    state.collection.push(payload.item)
  }

  state.collection = [...state.collection]

  return state
}

const actionWSSetCurrentWorkspaceOwnerID = (state, payload) => {
  return {
    ...state,
    currentWorkspaceOwnerID: payload.id
  }
}

const actionWSSetCurrentWorkspaceUserID = (state, payload) => {
  return {
    ...state,
    currentWorkspaceUserID: payload.id
  }
}

const actionWSSetCurrentWorkspaceUserRole = (state, payload) => {
  return {
    ...state,
    currentWorkspaceUserRole: payload.role
  }
}

const actionWSSetCurrentWorkspaceID = (state, payload) => {
  const collection = state.collection
  for (let index in collection) {
    if (`${collection[index].id}` === `${payload.id}`) {
      state.currentWorkspaceName = collection[index].name
      break
    }
  }

  return {
    ...state,
    currentWorkspaceID: payload.id
  }
}

const actionWSSetCurrentWorkspaceName = (state, payload) => {
  state.currentWorkspaceName = payload.name
  return state
}

const actionWSUpdateCollection = (state, payload) => {
  const collection = state.collection

  let found = false
  for (let index in collection) {
    // just to be sure we will properly compare by value and type
    let collectionItemID = parseInt(collection[index].id)
    let payloadItemID = parseInt(payload.item.id)

    if (collectionItemID === payloadItemID) {
      collection[index] = payload.item
      found = true
      break
    }
  }
  if (!found) {
    collection.push(payload.item)
  }

  return {
    ...state,
    collection: [...collection]
  }
}

const actionWSSetCollection = (state, payload) => {
  return {
    ...state,
    collection: [...payload.collection]
  }
}

const actionWSGlobalReset = () => {
  return defaultState()
}

export default Workspace
