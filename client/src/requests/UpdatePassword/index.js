import Comm from "services/Comm"
import Uri from "services/Uri"
import Catch401 from "middlewares/Catch401"

const UpdatePassword = async function (data) {
  let result = {}
  let error = {
    code: 0,
    message: "Password cannot be changed"
  }

  await Comm.request({
    url: Uri.changePassword(),
    method: "post",
    data: data
  })
    .then((res) => {
      result = res
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

export default UpdatePassword
