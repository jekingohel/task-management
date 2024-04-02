import { useNavigate } from "react-router-dom"

import { ReactComponent as IconTick } from "images/icon-tick.svg"
import SiteLogo from "components/__Shared/SiteLogo"
import Uri from "services/Uri"

const ResetPasswordSuccess = function () {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(Uri.signIn(), { replace: true })
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <SiteLogo />
        <div className="flex justify-center mt-5">
          <IconTick />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">
          You've updated your password!
        </h2>
        <p className="text-sm text-muted-foreground">
          Now you can sign in to your account
        </p>
        <button
          type="button"
          className="mt-8 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          onClick={onClickHandler}
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default ResetPasswordSuccess
