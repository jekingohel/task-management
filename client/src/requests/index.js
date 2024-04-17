import Init from "requests/Init"
import GetUser from "requests/GetUser"
import GetAuthUser from "requests/GetAuthUser"
import GetTasks from "requests/GetTasks"
import UpdateTask from "requests/UpdateTask"
import AddTask from "requests/AddTask"
import UpdateProfile from "requests/UpdateProfile"
import GetRefreshToken from "requests/GetRefreshToken"
import UpdatePassword from "requests/UpdatePassword"
import DeleteTask from "requests/DeleteTask"

const Requests = {
  Init,
  GetUser,
  GetAuthUser,
  GetTasks,
  UpdateTask,
  AddTask,
  UpdateProfile,
  GetRefreshToken,
  UpdatePassword,
  DeleteTask
}

export default Requests
