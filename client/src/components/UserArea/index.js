import InitLoading from "components/__Shared/InitLoading"
import { useSelector } from "react-redux"
import Req from "requests"
import Dashboard from "./Dashboard"
import { Sidebar } from "./__Shared"
import { Route, Routes } from "react-router-dom"

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
    <div className="container flex max-w-screen-lg flex-col  md:flex h-screen">
      <div className="flex w-full data-[panel-group-direction=vertical]:flex-col h-screen items-stretch">
        <Sidebar />
        <div className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90"></div>
        <div className="w-full">
          <Routes>
            <Route path={`${Uri.dashboard()}`} element={<Dashboard />} />
            <Route path={`${Uri.projectId()}`} element={<ProjectDetails />} />
          </Routes>
        </div>
        <div className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90"></div>
      </div>
    </div>
  )
}

export default UserArea
