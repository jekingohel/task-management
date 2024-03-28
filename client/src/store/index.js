import { createStore } from "redux"

import CollectionOfReducers from "store/reducers"

const Store = createStore(
  CollectionOfReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default Store
