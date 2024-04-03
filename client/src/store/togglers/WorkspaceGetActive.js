import Store from "store/index"
import User from "services/User"

const WorkspaceGetActive = function () {

  const currentUserID = User.id()
  const wsCollection = Store.getState().Workspace.collection

  let activeWs = wsCollection.filter(function (ws, index) {
    return ws.has_subscription === true
  })

  let myWs = activeWs.filter(function (ws, index) {
    return ws.owner_id === currentUserID
  })

  myWs = myWs.sort(function (a, b) {
    return a.id - b.id
  })

  if (myWs.length === 0) {
    return (activeWs.length > 0) ? activeWs[0].id : null
  }

  return parseInt(myWs[0].id)
}

export default WorkspaceGetActive
