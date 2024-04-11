import GetRefreshToken from "requests/GetRefreshToken"
import IsPast from "./IsPast"
import TimestampToDate from "./TimestampToDate"
import AddMinutesToTimestamp from "./AddMinutesToTimestamp"

// Checks if tokenExpiration in localstorage date is past, if so then trigger an update
const CheckIfTokenNeedsRefresh = function () {
  const MINUTES_TO_CHECK_FOR_TOKEN_REFRESH = 1440
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
      GetRefreshToken().then((response) => {
        window.localStorage.setItem("token", JSON.stringify(response.data))
        window.localStorage.setItem(
          "tokenExpiration",
          JSON.stringify(
            AddMinutesToTimestamp(MINUTES_TO_CHECK_FOR_TOKEN_REFRESH)
          )
        )
      })
      //store.dispatch("refreshToken")
    }
  }
}

export default CheckIfTokenNeedsRefresh
