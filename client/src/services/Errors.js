import Auth from "services/Auth"

const Errors = (() => {
  const ret = {}

  ret.is401 = (error) => {
    if (error.response?.status === 401) {
      Auth.signOut()
      return true
    }
    return false
  }

  return ret
})()

export default Errors
