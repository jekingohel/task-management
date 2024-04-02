import History from "services/History"
import Store from "store"
import Togglers from "store/togglers"
import Uri from "services/Uri"
import { AuthSetSigned, AuthSetNotSigned } from "store/actions"

const Auth = (function () {
  const ret = {}

  let user_id = null
  let token = null

  ret.setUserID = (value) => {
    user_id = value
  }

  ret.setUserToken = (value) => {
    token = value
  }

  ret.getUserID = () => {
    return user_id
  }

  ret.signIn = () => {
    Store.dispatch(AuthSetSigned())
  }

  ret.signOut = () => {
    Store.dispatch(AuthSetNotSigned())
    Togglers.GlobalReset()
    History.replace(Uri.signIn())
  }

  return ret
})()

export default Auth
