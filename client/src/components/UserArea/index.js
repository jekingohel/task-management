import InitLoading from "components/__Shared/InitLoading"
import { useSelector } from "react-redux"
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useMatch
} from "react-router-dom"
import Uri from "services/Uri"
import Req from "requests"
import Store from "store"
import CreateWorkspaceWrapper from "./Wrappers/CreateWorkspaceWrapper"
import WorkspaceIDMiddleware from "./Middlewares/WorkspaceIDMiddleware"
import UserWorkspaceWrapper from "./Wrappers/UserWorkspaceWrapper"

const UserArea = () => {
  const isEmpty = !!useMatch(Uri.u())
  const RequestFunc = useSelector((state) => state.Requests.func)
  const RequestParams = useSelector((state) => state.Requests.params)

  const createWorkspaceRequired = useSelector(
    (state) => state.CreateWorkspace.required
  )
  const location = useLocation()

  // this will show a loading page if the initial requests to the api are not completed yet; see /requests
  if (RequestFunc !== null) {
    Req[RequestFunc](RequestParams)
    return <InitLoading />
  }

  // just /u ? redirect to the default page
  if (isEmpty) {
    return (
      <Navigate
        to={`${Uri.uDefault({
          id: Store.getState().Workspace.currentWorkspaceID
        })}`}
        replace={true}
      />
    )
  }

  // if creating a workspace is required
  if (createWorkspaceRequired && location.pathname !== Uri.uCreateWorkspace()) {
    return <Navigate to={`${Uri.uCreateWorkspace()}`} replace={true} />
  }

  return (
    <>
      <Routes>
        {/* these have to be in a separate Route because of the structure of the page itself. It is outside the actual workspace container but still requires user credentials. */}
        <Route
          path={`${Uri.createWorkspace()}/*`}
          element={<CreateWorkspaceWrapper />}
        />
        {/* <Route
          path={`${Uri.deleteAccount()}/*`}
          element={<DeleteAccountWrapper />}
        /> */}

        {/* user workspace */}
        <Route
          path={":id/*"}
          element={<WorkspaceIDMiddleware component={UserWorkspaceWrapper} />}
        />
      </Routes>
    </>
  )
}

export default UserArea
