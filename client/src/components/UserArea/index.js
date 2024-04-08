import InitLoading from "components/__Shared/InitLoading"
import { useSelector } from "react-redux"
import { Navigate, Route, Routes, useMatch } from "react-router-dom"
import Uri from "services/Uri"
import Req from "requests"
import Header from "./__Shared/Header"
import Tasks from "./Tasks"

const UserArea = () => {
  const isEmpty = !!useMatch(Uri.u())
  const RequestFunc = useSelector((state) => state.Requests.func)
  const RequestParams = useSelector((state) => state.Requests.params)
  // this will show a loading page if the initial requests to the api are not completed yet; see /requests
  if (RequestFunc !== null) {
    Req[RequestFunc](RequestParams)
    return <InitLoading />
  }
  // just /u ? redirect to the default page
  if (isEmpty) {
    return <Navigate to={`${Uri.uDefault()}`} replace={true} />
  }
  return (
    <div>
      <Header />
      <div className="container flex max-w-screen-md items-center">
        <Routes>
          {/* these have to be in a separate Route because of the structure of the page itself. It is outside the actual workspace container but still requires user credentials. */}
          <Route path={`${Uri.default()}`} element={<Tasks />} />
        </Routes>
      </div>
    </div>
  )
}

export default UserArea
