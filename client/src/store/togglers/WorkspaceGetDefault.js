import Store from "store/index"
import User from "services/User"

const WorkspaceGetDefault = function () {

  const currentUserID = User.id()
  const wsCollection = Store.getState().Workspace.collection

  let myWs = wsCollection.filter(function (ws, index) {
    return ws.owner_id === currentUserID
  })

  myWs = myWs.sort(function (a, b) {
    return a.id - b.id
  })

  if (myWs.length === 0) {
    return wsCollection[0].id
  }

  return parseInt(myWs[0].id)
}

export default WorkspaceGetDefault
