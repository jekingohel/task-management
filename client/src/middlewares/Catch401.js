import Errors from "services/Errors"

const Catch401 = function (errorHandler, errorResponse) {
  return (error) => {
    // console.dir(error)
    if (!Errors.is401(error)) {
      if (typeof errorHandler === "function") {
        errorHandler(error)
      }
    } else {
      errorResponse.code = 401
    }
  }
}

export default Catch401
