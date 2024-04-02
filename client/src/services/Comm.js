import axios from "axios"
import CheckIfTokenNeedsRefresh from "utils/CheckIfTokenNeedsRefresh"

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

Comm.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // If request is different than any of the URLS in urlsExcludedForBearerHeader
    // then send Authorization header with token from localstorage
    const urlsExcludedForBearerHeader = [
      "/login",
      "/forgot",
      "/register",
      "/reset"
    ]
    if (urlsExcludedForBearerHeader.indexOf(config.url) === -1) {
      config.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem("token")
      )}`
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

Comm.interceptors.response.use(
  (response) => {
    if (response.config.url !== `${DefaultBaseURL}/token`) {
      CheckIfTokenNeedsRefresh()
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default Comm
