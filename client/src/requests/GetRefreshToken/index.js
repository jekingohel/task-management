import Uri from "services/Uri"
import Comm from "services/Comm"
import Catch401 from "middlewares/Catch401"

const GetRefreshToken = async function () {
  let result = {}
  let error = {
    code: 0,
    message: ""
  }

  await Comm.request({
    url: `${Uri.tokens()}`,
    method: "get"
  })
    .then((res) => {
      if (res.data.token) {
        result.data = res.data.token
      } else {
        error.code = 404
        error.message = "Unexpected error"
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

export default GetRefreshToken
