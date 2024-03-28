import Uri from "services/Uri"
import Auth from "services/Auth"
import Comm from "services/Comm"
import Catch401 from "middlewares/Catch401"

const GetUser = async function () {
  let result = {}
  let error = {
    code: 0,
    message: ""
  }

  await Comm.request({
    url: Uri.usersID({ id: Auth.getUserID() }),
    method: "get"
  })
    .then((res) => {
      // console.dir(res)
      if (res.data?.data?.id) {
        result.data = res.data.data
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

export default GetUser
