import Uri from "services/Uri"
import Comm from "services/Comm"
import Catch401 from "middlewares/Catch401"

const GetTasks = async function ({
  project,
  filter,
  fields,
  page,
  limit,
  sort
}) {
  let result = {}
  let error = {
    code: 0,
    message: ""
  }

  await Comm.request({
    url: Uri.getTasks({ project, filter, fields, page, limit, sort }),
    method: "get"
  })
    .then((res) => {
      if (res.data) {
        result.data = res.data
      } else {
        error.code = 404
        error.message = "Unexpected task structure"
      }
    })
    .catch(
      Catch401((err) => {
        // console.dir(err)
        error.code = err.response.status
        error.message = err.response.data.message
      }, error)
    )

  if (error.code) {
    return Promise.reject(error)
  }

  return Promise.resolve(result)
}

export default GetTasks
