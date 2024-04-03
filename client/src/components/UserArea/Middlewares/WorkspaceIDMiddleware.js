import { Navigate, useParams, useLocation } from "react-router-dom"
import Togglers from "store/togglers"
import Store from "store"
import Uri from "services/Uri"
import ValidateWorkspaceID from "store/togglers/ValidateWorkspaceID"
import { CreateWorkspaceSetStep, WSSetCurrentWorkspaceID } from "store/actions"

const WorkspaceIDMiddleware = function ({ component: Component, ...rest }) {
  const { id } = useParams()
  const uriWorkspaceID = parseInt(id)
  const location = useLocation()

  let navigateUri

  const currentWorkspaceID = Store.getState().Workspace.currentWorkspaceID
  // 1. ws id in the state is not set yet
  // 2. try to use the ws id from the uri
  // 3. validate the ws id from the uri; is it valid? do we have a ws id in the state with that id?
  // 4. if we have a ws with id that is the same as this in the uri then set the current ws id in the store to the ws id from the uri
  // 5. in case the ws id in the uri is not a valid one then set the current ws id in the store to the first one from the collection of ws-es in the store and then redirect to that ws
  if (currentWorkspaceID === null) {
    if (!ValidateWorkspaceID(uriWorkspaceID)) {
      // const workspaceID = parseInt(Store.getState().Workspace.collection[0].id)
      const workspaceID = Togglers.WorkspaceGetDefault()
      Store.dispatch(WSSetCurrentWorkspaceID(workspaceID))
      navigateUri = Uri.uDefault({ id: workspaceID })
      if (location.pathname !== navigateUri) {
        return <Navigate to={navigateUri} replace={true} />
      }
    } else {
      Store.dispatch(WSSetCurrentWorkspaceID(uriWorkspaceID))
    }
  } else {
    // 1. check current ws has not subscription
    // 2. check owner of current ws
    // 3. in case user is owner of current ws then redirect to create workspace step 3
    // 4. in case user is not owner of current ws then redirect to inactive workspace
    let currentWorkspace = Togglers.WorkspaceGetCurrent()
    if (!currentWorkspace.has_subscription) {
      if (currentWorkspace.owner_id === Store.getState().User.id) {
        Store.dispatch(CreateWorkspaceSetStep(3))
        return <Navigate to={Uri.uCreateWorkspace()} />
      } else {
        return <Navigate to={Uri.inactiveWorkspace()} />
      }
    }

    // 1. here we have a current ws id in the store
    // 2. validate the ws id in the uri
    // 3. in case the ws id in the uri is not valid then redirect to the current ws id we have in the store
    // 4. in case the ws id in the uri is valid but different from the one in the store then change the current ws id in the store to the one from the uri and redirect to it
    if (!ValidateWorkspaceID(uriWorkspaceID)) {
      navigateUri = Uri.uDefault({ id: uriWorkspaceID })
      if (location.pathname !== navigateUri) {
        return <Navigate to={navigateUri} replace={true} />
      }
    } else if (`${id}` !== `${currentWorkspaceID}`) {
      // NOTE: the next line will trigger a warning in case you switch from one ws to another for the first time in the current session. This should be investigated!
      // Store.dispatch(WSSetCurrentWorkspaceID(uriWorkspaceID))
      navigateUri = Uri.uDefault({ id: uriWorkspaceID })
      if (location.pathname !== navigateUri) {
        return <Navigate to={navigateUri} replace={true} />
      }
    }
  }

  return <Component {...rest} />
}

export default WorkspaceIDMiddleware
