import InitLoading from "components/__Shared/InitLoading"
import { useSelector } from "react-redux"
import Req from "requests"
import Dashboard from "./Dashboard"
import { Sidebar } from "./__Shared"
import { Navigate, Route, Routes } from "react-router-dom"

import Uri from "services/Uri"
import ProjectDetails from "./ProjectDetails"

const UserArea = () => {
  const RequestFunc = useSelector((state) => state.Requests.func)
  const RequestParams = useSelector((state) => state.Requests.params)
  // this will show a loading page if the initial requests to the api are not completed yet; see /requests
  if (RequestFunc !== null) {
    Req[RequestFunc](RequestParams)
    return <InitLoading />
  }
  return (
    <div className="container flex max-w-screen-lg flex-col">
      <div className="flex w-full data-[panel-group-direction=vertical]:flex-col h-full max-h-[800px] items-stretch">
        <Sidebar />
        <ProjectDetails />

        <Routes>
          <Route path={`${Uri.dashboard()}`} element={<Dashboard />} />
          <Route path={`${Uri.project()}`} element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default UserArea
