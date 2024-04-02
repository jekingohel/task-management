import IsPast from "./IsPast"
import TimestampToDate from "./TimestampToDate"

// Checks if tokenExpiration in localstorage date is past, if so then trigger an update
const CheckIfTokenNeedsRefresh = function () {
  // Checks if time set in localstorage is past to check for refresh token
  if (
    window.localStorage.getItem("token") !== null &&
    window.localStorage.getItem("tokenExpiration") !== null
  ) {
    if (
      IsPast(
        new Date(
          TimestampToDate(
            JSON.parse(window.localStorage.getItem("tokenExpiration"))
          )
        )
      )
    ) {
      console.log("refreshToken")
      //store.dispatch("refreshToken")
    }
  }
}

export default CheckIfTokenNeedsRefresh
