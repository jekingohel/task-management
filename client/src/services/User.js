import Store from "store"

const User = (() => {
  const ret = {}

  ret.id = () => {
    return Store.getState().User.id
  }
  ret.email = () => {
    return Store.getState().User.email
  }
  ret.name = () => {
    return Store.getState().User.name
  }

  return ret
})()

export default User
