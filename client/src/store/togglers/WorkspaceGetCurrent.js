import Store from "store"

const WorkspaceGetCurrent = function () {

  const currentWorkspaceID = Store.getState().Workspace.currentWorkspaceID
  const collection = Store.getState().Workspace.collection

  for (let index in collection) {
    if (`${collection[index].id}` === `${currentWorkspaceID}`) {
      return collection[index]
    }
  }
}

export default WorkspaceGetCurrent
