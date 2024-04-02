import Store from "store"

import Log from "utils/Log"

import {
  ProjectsSetCollection,
  RequestsReady,
  UserSetData
} from "store/actions"
import GetAuthUser from "requests/GetAuthUser"
import GetProjects from "requests/GetProjects"

const Init = async function (params) {
  Log.req("Init()")

  // NOTES
  // 1. The requests sequence here is important; Do not re-arrange requests if you are not at least 280% sure!

  let error = {
    code: 0,
    message: ""
  }

  // --------------------------------------------------------------------------------
  // Initial Synchronous requests
  // --------------------------------------------------------------------------------

  // *** User Personal Info
  await GetAuthUser()
    .then((res) => {
      Store.dispatch(UserSetData(res.data))
    })
    .catch((err) => {
      // console.dir(err)
      error = err
      if (err.code !== 401) {
        // ...
      }
    })

  if (error.code > 0) {
    return
  }

  // *** Users Tasks

  // --------------------------------------------------------------------------------
  // Asynchronous requests
  // --------------------------------------------------------------------------------

  await new Promise((resolve, reject) => {
    let processCounter = 0

    const setupProcessCounter = function () {
      processCounter++
    }

    const processResolve = function () {
      processCounter--
      if (processCounter <= 0) {
        resolve()
      }
    }

    setupProcessCounter()
    GetProjects()
      .then((res) => {
        Store.dispatch(ProjectsSetCollection(res?.data))
      })
      .catch((err) => {
        // console.dir(err)
        error = err
      })
      .finally(() => {
        processResolve()
      })
  })
    .then((res) => {
      // console.log(res)
    })
    .catch((err) => {
      // console.log(err)
    })

  // --------------------------------------------------------------------------------
  // *** Post Setup

  // Good to go...
  Store.dispatch(RequestsReady())
}

export default Init
