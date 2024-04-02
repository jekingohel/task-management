import { ReactComponent as SplashSign } from "images/site-logo.svg"

const InitLoading = function () {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="splash-box flex-col flex justify-center items-center">
        <SplashSign className="logo-sign w-10" />
        <span className="text-sm text-muted-foreground mt-2">Loading...</span>
      </div>
    </div>
  )
}

export default InitLoading
