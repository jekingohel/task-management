import Comm from "services/Comm"
import Uri from "services/Uri"
import Catch401 from "middlewares/Catch401"

const UpdateProfile = async function (data) {
  let result = {}
  let error = {
    code: 0,
    message: "Profile cannot be changed"
  }

  await Comm.request({
    url: Uri.settingsProfile(),
    method: "PATCH",
    data: data
  })
    .then((res) => {
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

export default UpdateProfile
