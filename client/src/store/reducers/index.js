import { combineReducers } from "redux"

import User from "store/reducers/User"
import Auth from "store/reducers/Auth"
import Init from "store/reducers/Init"
import Requests from "store/reducers/Requests"
import Shared from "store/reducers/Shared"
import CreateWorkspace from "store/reducers/CreateWorkspace"
import Workspace from "store/reducers/Workspace"

const CollectionOfReducers = combineReducers({
  User: User,
  Auth: Auth,
  Init: Init,
  Requests: Requests,
  Shared: Shared,
  CreateWorkspace: CreateWorkspace,
  Workspace: Workspace
})

export default CollectionOfReducers
