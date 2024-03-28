import Store from "store"

import {
  RequestsGlobalReset,
  SharedGlobalReset,
  UserGlobalReset
} from "store/actions"

const GlobalReset = function () {
  Store.dispatch(SharedGlobalReset())
  Store.dispatch(RequestsGlobalReset())
  Store.dispatch(UserGlobalReset())
}

export default GlobalReset
