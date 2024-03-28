import History from "services/History"
import Uri from "services/Uri"

const Events = (function () {
  let ret = {}

  // --------------------------------------------------------------------------------
  // Window Focus/Blur

  // let windowFocusAt = 0
  //
  // const windowBlur = function() {
  //   windowFocusAt = (new Date()).getTime()
  // }
  //
  // const windowFocus = function() {
  //   let windowBlurAt = (new Date()).getTime()
  //   console.log(windowBlurAt - windowFocusAt)
  // }

  // Window Online/Offline

  const windowOnline = function (e) {
    document.location.reload()
  }

  const windowOffline = function (e) {
    History.replace(Uri.offline())
  }

  // --------------------------------------------------------------------------------
  // Init

  ret.init = function () {
    // Window Focus/Blur
    // window.addEventListener("blur", windowBlur);
    // window.addEventListener("focus", windowFocus);

    // Online/Offline
    window.addEventListener("offline", windowOffline)
    window.addEventListener("online", windowOnline)
  }

  return ret
})()

export default Events
