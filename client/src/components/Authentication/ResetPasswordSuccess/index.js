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
    <div className="container-fluid successfully-page">
      <div className="container">
        <div className="page-outline">
          <SiteLogo />

          <div className="form-box">
            <div className="box-content">
              <IconTick />

              <h2>You've updated your password!</h2>

              <p className="text-muted">
                Now you can sign in to your ClipFlip account
              </p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onClickHandler}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordSuccess
