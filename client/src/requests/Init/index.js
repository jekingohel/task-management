import Store from "store"

import Log from "utils/Log"

import GetUser from "requests/GetUser"

import { RequestsReady, TasksSetCollection, UserSetData } from "store/actions"
import GetAuthUser from "requests/GetAuthUser"
import GetTasks from "requests/GetTasks"

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

  if (error.code > 0) {
    return
  }

  // *** Users Tasks
  let payloadData = {
    fields: "title,description,status,createdAt,order",
    page: 1,
    limit: 10,
    sort: "order",
    order: 1
  }
  await GetTasks(payloadData)
    .then((res) => {
      Store.dispatch(TasksSetCollection(res.data))
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

  // --------------------------------------------------------------------------------
  // Asynchronous requests
  // --------------------------------------------------------------------------------

  //   await new Promise((resolve, reject) => {
  //     let processCounter = 0;

  //     const setupProcessCounter = function () {
  //       processCounter++;
  //     };

  //     const processResolve = function () {
  //       processCounter--;
  //       if (processCounter <= 0) {
  //         resolve();
  //       }
  //     };
  //   })
  //     .then((res) => {
  //       // console.log(res)
  //     })
  //     .catch((err) => {
  //       // console.log(err)
  //     });

  // --------------------------------------------------------------------------------
  // *** Post Setup

  // Good to go...
  Store.dispatch(RequestsReady())
}

export default Init
