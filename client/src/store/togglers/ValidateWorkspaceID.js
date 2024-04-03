import Store from "store"

const ValidateWorkspaceID = function (workspaceID) {

  const workspaces = Store.getState().Workspace.collection

  for (let ws of workspaces) {
    if (`${ws.id}` === `${workspaceID}`) {
      return true
    }
  }

  return false
}

export default ValidateWorkspaceID
