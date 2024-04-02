import Store from "store"

import {
  RequestsGlobalReset,
  SharedGlobalReset,
  UserGlobalReset
} from "store/actions"

const GlobalReset = function () {
  window.localStorage.removeItem("token")
  window.localStorage.removeItem("tokenExpiration")
  window.localStorage.removeItem("user")
  Store.dispatch(SharedGlobalReset())
  Store.dispatch(RequestsGlobalReset())
  Store.dispatch(UserGlobalReset())
}

export default GlobalReset
