//
// application INIT script
// everything here is executed only once within the application life
// this will happen in the moment when the application fully loads
// currently called within "src/index.js" as side-effect
//

import Auth from "services/Auth"

import Events from "services/Events"
import Store from "store"
import Uri from "services/Uri"
import Comm from "services/Comm"
import { InitSetDone, AuthSetSigned } from "store/actions"
import Catch401 from "middlewares/Catch401"

// setup global events
Events.init()

// is the user logged in?
Comm.request({
  url: Uri.session(),
  method: "get"
})
  .then(function (res) {
    // console.log(res)
    if (res.data?.data?.user_id) {
      Auth.setUserID(res.data.data.user_id)
      Store.dispatch(AuthSetSigned())
    }
  })
  .catch(
    Catch401((error) => {
      // console.log(error)
    })
  )
  .then(() => {
    Store.dispatch(InitSetDone())
  })
