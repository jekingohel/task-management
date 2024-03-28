import Store from "store"

const User = (() => {
  const ret = {}

  ret.id = () => {
    return Store.getState().User.id
  }
  ret.email = () => {
    return Store.getState().User.email
  }
  ret.fullName = () => {
    return Store.getState().User.full_name
  }
  ret.firstName = () => {
    return Store.getState().User.first_name
  }
  ret.lastName = () => {
    return Store.getState().User.last_name
  }

  return ret
})()

export default User
