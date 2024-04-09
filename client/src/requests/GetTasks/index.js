import Uri from "services/Uri"
import Comm from "services/Comm"
import Catch401 from "middlewares/Catch401"

const GetTasks = async function (data) {
  let result = {}
  let error = {
    code: 0,
    message: ""
  }
  // Serialize data into query parameters
  const queryParams = new URLSearchParams(data).toString()
  await Comm.request({
    url: `${Uri.tasks()}?${queryParams}`,
    method: "get",
    data: data
  })
    .then((res) => {
      if (res.data.docs) {
        result.data = res.data.docs
      } else {
        error.code = 404
        error.message = "Unexpected user structure"
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
