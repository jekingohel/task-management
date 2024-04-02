import Init from "requests/Init"
import GetUser from "requests/GetUser"
import GetAuthUser from "requests/GetAuthUser"

import CreateProject from "requests/CreateProject"
import DeleteProject from "requests/DeleteProject"
import GetProject from "requests/GetProject"
import GetProjects from "requests/GetProjects"
import UpdateProject from "requests/UpdateProject"

import CreateTask from "requests/CreateTask"
import DeleteTask from "requests/DeleteTask"
import GetTask from "requests/GetTask"
import GetTasks from "requests/GetTasks"
import UpdateTask from "requests/UpdateTask"

const Requests = {
  Init,
  GetUser,
  GetAuthUser,
  CreateProject,
  DeleteProject,
  GetProject,
  GetProjects,
  UpdateProject,
  CreateTask,
  DeleteTask,
  GetTask,
  GetTasks,
  UpdateTask
}

export default Requests
