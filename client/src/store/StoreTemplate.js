const StoreTemplate = function (defaultState, container) {
  return function (state = defaultState, action) {
    if (typeof container[action.type] === "function") {
      return container[action.type](state, action.payload)
    }
    return state
  }
}

export default StoreTemplate
