import { ReactComponent as SplashSign } from "images/site-logo.svg"

const InitLoading = function () {
  return (
    <div className="splash-screen">
      <div className="splash-box">
        <SplashSign className="logo-sign" />
      </div>
    </div>
  )
}

export default InitLoading
