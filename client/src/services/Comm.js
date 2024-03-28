import axios from "axios"

//axios.defaults.crossDomain = true
axios.defaults.withCredentials = true
axios.defaults.xsrfCookieName = "XSRF-TOKEN"
axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN"

export const DefaultBaseURL = (() => {
  return process.env.REACT_APP_API_URL
})()

const Comm = axios.create({
  baseURL: DefaultBaseURL,
  timeout: 600000, // value in milliseconds
  headers: {
    Accept: "application/json"
  }
})

export default Comm
