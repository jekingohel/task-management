import Comm from "services/Comm"
import Uri from "services/Uri"

let Resources = (function () {
  const ret = {}

  let dataContainer = {}

  ret.setResources = (data) => {
    dataContainer = data
  }

  // How it works:
  // the "path" parameter is expected to be a string
  // the value of the parameter is split by '.'
  // every element after this split must be a key or sub-key of the object "dataContainer" defined here in this function
  // for example: dataContainer = {'a': { 'b': 'value', 'c': 'other value'} }; getValue('a.c') will return "other value"
  // in case a key or sub-key is not found within "dataContainer" then this function will return the value of the "path" itself
  ret.getValue = (path) => {
    let chunks = path.split(".")
    let collection = dataContainer
    for (const item of chunks) {
      if (item in collection) {
        collection = collection[item]
      } else {
        return path
      }
    }
    return collection
  }

  ret.getTrans = (path) => {
    return ret.getValue(`messages.${path}`)
  }

  ret.getValidationRule = (path) => {
    return ret.getValue(`rules.${path}`)
  }

  // this will re-fetch the value of "resourcesData" from the server
  ret.fetch = () => {
    // api request
    Comm.request({
      url: Uri.info(),
      method: "get"
    })
      .then((res) => {
        // console.log(res)
        ret.setResources(res.data)
      })
      .catch((err) => {
        // console.dir(err)
      })
  }

  return ret
})()

export default Resources
