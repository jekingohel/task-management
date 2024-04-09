import { combineReducers } from "redux"

import User from "store/reducers/User"
import Auth from "store/reducers/Auth"
import Init from "store/reducers/Init"
import Requests from "store/reducers/Requests"
import Shared from "store/reducers/Shared"
import Tasks from "store/reducers/Tasks"

const CollectionOfReducers = combineReducers({
  User: User,
  Auth: Auth,
  Init: Init,
  Requests: Requests,
  Shared: Shared,
  Tasks: Tasks
})

export default CollectionOfReducers
