import Catch401 from "middlewares/Catch401"
import Comm from "services/Comm"
import Uri from "services/Uri"

const AddTask = async function (data) {
  let result = {}
  let error = {
    code: 0,
    message: "Task couldn't be added"
  }

  await Comm.request({
    url: Uri.tasks(),
    method: "post",
    data: data
  })
    .then((res) => {
      // console.dir(res)
      result = res.data
    })
    .catch(
      Catch401((err) => {
        // console.dir(err)
        error.code = err.response.status
      })
    )

  if (error.code > 0) {
    return Promise.reject(error)
  }

  return Promise.resolve(result)
}

export default AddTask
